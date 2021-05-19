import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { VolunteersComponent } from "./pages/volunteers/volunteers.component"
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
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
  }
]


@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }