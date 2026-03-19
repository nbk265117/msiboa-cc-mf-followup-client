import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {TranslateModule} from "@ngx-translate/core";
import {EaiLibMaterialModule} from "eai-lib-material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [FormsModule,
    BrowserModule, AppRoutingModule, CoreModule, TranslateModule, EaiLibMaterialModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
