import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { UserViewprofileComponent } from './user-viewprofile/user-viewprofile.component';
import { UserBookflightComponent } from './user-bookflight/user-bookflight.component';
import { UserViewflightComponent } from './user-viewflight/user-viewflight.component';
import { UserViewbookingComponent } from './user-viewbooking/user-viewbooking.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { SearchflightsComponent } from './searchflights/searchflights.component';
import { UserCancelregComponent } from './user-cancelreg/user-cancelreg.component';
import { UserChangepasswordComponent } from './user-changepassword/user-changepassword.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:MainHomepageComponent},
  {path:'main-homepage',component:MainHomepageComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'user',component:UserRegistrationComponent},
  {path:'admin1',component:AdminHomepageComponent,children:[ 
    {path:'', component:AdminComponent},
    {path:'home', component:AdminComponent},
    {path:'maneger',component:ManagerAddflightsComponent },
    {path:"view",component:ViewFlightsComponent},
  {path:'view1',component:ManagerViewregComponent},
  {path:'view2',component:ManagerViewuserComponent},
  {path:'view3',component:ManagerViewcancelregComponent},
] },
 
  
  {path:'user1',component:UserLoginComponent},
  {path:'user2',component:UserMainComponent,children:[
    {path:'',component:HomeComponent},
    {path:'home1',component:HomeComponent},
    {path:'user4',component:UserViewprofileComponent},
  
  {path:'user6',component:UserViewflightComponent},
  {path:'user7',component:UserViewbookingComponent},
  {path:'user8',component:UserPaymentsComponent},
  {path:'user9',component:UserRegComponent},
  {path:'search',component:SearchflightsComponent},
  {path:'user10',component:UserCancelregComponent},
  {path:'user11',component:UserChangepasswordComponent}
  
  ]},
  {path:'user3',component:UserRegistrationComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
