import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarpartComponent } from './carpart/carpart.component';
import {RouterModule} from "@angular/router";
import { appRoutes } from "./routes";
import { LoginComponent } from "./login/login.component";


@NgModule({
  declarations: [
    AppComponent,
    CarpartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
