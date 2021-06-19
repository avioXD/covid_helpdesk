import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
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

//import addons:
import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 
import {ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//forms:
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//History: 
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EditVolunteersComponent } from './admin/components/edit-volunteers/edit-volunteers.component';
import { AdminMainPageComponent } from './admin/admin-main-page/admin-main-page.component';
import { HomeVolunteerListComponent } from './components/home-volunteer-list/home-volunteer-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { NewsFeedComponent } from './pages/news-feed/news-feed.component';

import {NgxImageCompressService} from 'ngx-image-compress';
import { EditNewsfeedComponent } from './admin/components/edit-newsfeed/edit-newsfeed.component';


// firebase Modules: 
import {environment} from "../environments/environment";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { EditHospitalsComponent } from './admin/components/edit-hospitals/edit-hospitals.component';
import { EditCovidCasesComponent } from './admin/components/edit-covid-cases/edit-covid-cases.component';
import { VaccinationComponent } from './pages/vaccination/vaccination.component';
import { AmbulanceComponent } from './pages/ambulance/ambulance.component';
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
    EditVolunteersComponent,
    AdminMainPageComponent,
    HomeVolunteerListComponent,
    CreatePostComponent,
    NewsFeedComponent,
    EditNewsfeedComponent,
    AdminLoginComponent,
    EditHospitalsComponent,
    EditCovidCasesComponent,
    VaccinationComponent,
    AmbulanceComponent,
    
    
  
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
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulesPro.forRoot()
  
  ],
  providers: [{provide:LocationStrategy  , useClass:HashLocationStrategy,  }, NgxImageCompressService, MDBSpinningPreloader,DatePipe],
  bootstrap: [AppComponent,]
})
export class AppModule { }
