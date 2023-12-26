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

const routes: Routes = [
  {path:'',redirectTo:'main-homepage',pathMatch:'full'},
  {path:'main-homepage',component:MainHomepageComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'user',component:UserRegistrationComponent},
  {path:'admin1',component:AdminHomepageComponent},
  {path:'maneger',component:ManagerAddflightsComponent },
  {path:"view",component:ViewFlightsComponent},
  {path:'view1',component:ManagerViewregComponent},
  {path:'view2',component:ManagerViewuserComponent},
  {path:'view3',component:ManagerViewcancelregComponent},
  {path:'user1',component:UserLoginComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
