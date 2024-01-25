import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-viewprofile',
  templateUrl: './user-viewprofile.component.html',
  styleUrls: ['./user-viewprofile.component.css']
})
export class UserViewprofileComponent {
  user:any;
 
  updateForm!:FormGroup
constructor( private api:UserServiceService, private form:FormBuilder){}
ngOnInit():void{
  const u=localStorage.getItem("id");
  console.log(u, "id");
  
  this.api.getuser(u).subscribe((res:any)=>{
    this.user=res;
    console.log(this.user);
    
  })
  this.updateForm=this.form.group({
    firstname:[""],
    lastname:[""],
    username:[""],
    email:[""],
    mobileno:[""],
    address:[""],
    id:[""]

  })
}
useredit(d:any){
this.updateForm.patchValue({
  firstname:d.firstname,
  lastname:d.lastname,
  username:d.username,
  email:d.email,
  mobileno:d.mobileno,
  address:d.address,
  id:d._id
})
}
update() {
  console.log(this.updateForm.value, 'updated values');
  this.api.userupdate(this.updateForm.value).subscribe((res: any) => {
    window.location.reload();
  });
}
}
