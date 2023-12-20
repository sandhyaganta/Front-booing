import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';

const routes: Routes = [
  {path:'',redirectTo:'main-homepage',pathMatch:'full'},
  {path:'main-homepage',component:MainHomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
