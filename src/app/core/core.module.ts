import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {NgModule} from "@angular/core";
import {assetUrl} from "../../single-spa/asset-url";


export function HttpLoaderFactory(http: HttpClient) {
    // Adjust the translation file URL based on the microfrontend's base URL
    // assetUrl('i18n/')
    //http://localhost:9099/assets/i18n/
    return new TranslateHttpLoader(http,  assetUrl('i18n/'), '.json');
}

// @ts-ignore
@NgModule({
    imports: [HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        TranslateService
    ],
})
export class CoreModule {}
