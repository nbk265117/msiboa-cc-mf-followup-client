import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Detect if running in standalone mode (not inside single-spa shell)
const isStandalone = !(window as any).singleSpaNavigate;

if (isStandalone) {
  // Standalone mode: Bootstrap the app directly
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

// Single-spa lifecycle exports (only used in micro-frontend mode)
let lifecycleExports: any = {
  bootstrap: async () => {},
  mount: async () => {},
  unmount: async () => {},
};

if (!isStandalone) {
  // Single-spa mode: Setup lifecycle functions dynamically
  Promise.all([
    import('@angular/core'),
    import('@angular/router'),
    import('single-spa-angular'),
    import('./single-spa/single-spa-props')
  ]).then(([core, router, spa, props]) => {
    const lifecycles = spa.singleSpaAngular({
      bootstrapFunction: (singleSpaProps: any) => {
        props.singleSpaPropsSubject.next(singleSpaProps);
        return platformBrowserDynamic(spa.getSingleSpaExtraProviders()).bootstrapModule(AppModule);
      },
      template: '<app-root />',
      Router: router.Router,
      NavigationStart: router.NavigationStart,
      NgZone: core.NgZone,
    });
    lifecycleExports.bootstrap = lifecycles.bootstrap;
    lifecycleExports.mount = lifecycles.mount;
    lifecycleExports.unmount = lifecycles.unmount;
  });
}

export const bootstrap = (props: any) => lifecycleExports.bootstrap(props);
export const mount = (props: any) => lifecycleExports.mount(props);
export const unmount = (props: any) => lifecycleExports.unmount(props);
