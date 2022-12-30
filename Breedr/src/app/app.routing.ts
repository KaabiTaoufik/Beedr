import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouteNames } from './Route-Names.model';

export const APP_ROUTES: Routes = [
  {path: RouteNames.HOME, component: HomeComponent},
  {path: '', component: HomeComponent}, // should be changed to our default page
];