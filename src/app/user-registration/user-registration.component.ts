import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  Registrationform!:FormGroup;

  constructor(private api:UserServiceService, private form:FormBuilder, private route:Router ){}
  ngOnInit():void{
    this.Registrationform=this.form.group({
      firstname:[''],
      lastname:[''],
      username:[''],
      email:[''],
      gender:[''],
      mobileno:[''],
      password:[''],
      address:['']
       })
  }

  useradd(){
    
    this.api.userCreate(this.Registrationform.value).subscribe((res:any)=>{
      console.log(res,"user check")
      this.route.navigate(["/user1"])
     
    })
  }
}
