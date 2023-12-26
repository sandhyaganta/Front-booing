import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ManagerAddflightsComponent } from './manager-addflights/manager-addflights.component';
import { ViewFlightsComponent } from './view-flights/view-flights.component';
import { ManagerViewregComponent } from './manager-viewreg/manager-viewreg.component';
import { ManagerViewuserComponent } from './manager-viewuser/manager-viewuser.component';
import { ManagerViewcancelregComponent } from './manager-viewcancelreg/manager-viewcancelreg.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMainComponent } from './user-main/user-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHomepageComponent,
    AdminLoginComponent,
    UserRegComponent,
    AdminHomepageComponent,
    ManagerAddflightsComponent,
    ViewFlightsComponent,
    ManagerViewregComponent,
    ManagerViewuserComponent,
    ManagerViewcancelregComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
