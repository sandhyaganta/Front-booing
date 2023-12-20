import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';

const routes: Routes = [
  {path:'',redirectTo:'main-homepage',pathMatch:'full'},
  {path:'main-homepage',component:MainHomepageComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'user',component:UserRegComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
