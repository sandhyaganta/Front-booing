import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 Loginform!:FormGroup;
 constructor( private api:ServiceService, private form:FormBuilder, private route:Router){}
 ngOnInit(): void {
   this.Loginform=this.form.group({
    username:[''],
    password:['']
   })
   

   }
   admin(){
    this.api.adminLogin(this.Loginform.value).subscribe((res:any)=>{
      if(res){
        alert("login successfuly")
        this.route.navigate(["/admin1"])
      }
      else{
        alert("login failed")
      }
    })
   
   }
   

 }
