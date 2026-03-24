import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {NgModule} from "@angular/core";
import {assetUrl} from "../../single-spa/asset-url";


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, assetUrl('i18n/'), '.json');
}

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
