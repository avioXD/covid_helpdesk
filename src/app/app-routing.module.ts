import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { VolunteersComponent } from "./pages/volunteers/volunteers.component"
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { AdminMainPageComponent } from './admin/admin-main-page/admin-main-page.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
//gurading :

import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';
import { OxygensComponent } from './pages/oxygens/oxygens.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['adminlogin']);
const redirectLoggedInToAdmin = () => redirectLoggedInTo(['admin']);

const routes: Routes =[
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'volunteers',
    component: VolunteersComponent,
  },
  {
    path: 'hospitals',
    component: HospitalsComponent,
  },
  {
    path:'oxygen',
    component: OxygensComponent
  },
  {
    path: 'newsfeed',
    component: NewsFeedComponent,
  },
  {
    path: 'adminlogin',
    component: AdminLoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToAdmin }
  },
  {
    path: 'admin',
    component: AdminMainPageComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe:  redirectUnauthorizedToLogin}
  },
  
]


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
