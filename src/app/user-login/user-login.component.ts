import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  Loginform!:FormGroup;
  constructor(private api:UserServiceService,private form:FormBuilder, private route:Router){}
ngOnInit(): void {
  this.Loginform=this.form.group({
    username:[''],
    password:['']

  })
  
  
}
user(){
  console.log("userlogin successfuly",this.Loginform.value)
  this.api.userLogin(this.Loginform.value).subscribe((res:any)=>{
    console.log('res',res.users._id);
    console.log('res',res.token);
    localStorage.setItem("token",res.token)
    localStorage.setItem("id",res.users._id)
    localStorage.setItem("username",res.users.username)
    if(res){
      alert("login successfuly")
      this.route.navigate(["/user2"])
    }
    else{
      alert("login failed")
    }
    
  })
}
}
