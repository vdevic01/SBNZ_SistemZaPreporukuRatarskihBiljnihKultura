import { Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ParcelDetailsPageComponent} from "./pages/parcel-details-page/parcel-details-page.component";
import {CreateParcelPageComponent} from "./pages/create-parcel-page/create-parcel-page.component";

export const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'parcel/create', component: CreateParcelPageComponent},
  {path: 'parcel/:id', component: ParcelDetailsPageComponent},
  {path: '**', redirectTo: 'login'}
];
