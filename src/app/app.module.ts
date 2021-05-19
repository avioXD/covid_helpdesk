import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartDivComponent } from './components/start-div/start-div.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { VaccineRegisterComponent } from './components/vaccine-register/vaccine-register.component';
import { CasesChartComponent } from './components/cases-chart/cases-chart.component';
import { NgoListComponent } from './components/ngo-list/ngo-list.component';
import { OthersComponent } from './components/others/others.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import{FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { HospitalsComponent } from './pages/hospitals/hospitals.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { OxygensComponent } from './pages/oxygens/oxygens.component';
import { BeavolunteerComponent } from './pages/beavolunteer/beavolunteer.component'
//import addons: 
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//forms:
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//History: 
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    StartDivComponent,
    ResourcesComponent,
    VaccineRegisterComponent,
    CasesChartComponent,
    NgoListComponent,
    OthersComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HospitalsComponent,
    VolunteersComponent,
    OxygensComponent,
    BeavolunteerComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule, 
    RouterModule,
 
  ],
  providers: [{provide:LocationStrategy , useClass:HashLocationStrategy }],
  bootstrap: [AppComponent,]
})
export class AppModule { }
