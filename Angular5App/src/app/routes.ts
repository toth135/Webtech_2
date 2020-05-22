import { Routes } from '@angular/router';
import { CarpartComponent} from "./carpart/carpart.component";
import {LoginComponent} from "./login/login.component";

export const appRoutes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'carparts', component: CarpartComponent
  }
];
