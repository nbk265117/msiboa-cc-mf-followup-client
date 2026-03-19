import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import {HomeComponent} from "./home.component";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
