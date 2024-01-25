import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-payments',
  templateUrl: './user-payments.component.html',
  styleUrls: ['./user-payments.component.css']
})
export class UserPaymentsComponent {
  Registrationform!:FormGroup;
  constructor(private api:UserServiceService, private form:FormBuilder){}
  ngOnInit():void{
    
    let bid=localStorage.getItem("bi")
    console.log(bid,"bid");
    
    let username=localStorage.getItem("username")


    this.Registrationform=this.form.group({
      username:username,
      bookid:bid,
      cardtype:[''],
      cvvnumber:[''],
      auccountnumber:['']
    })
  }
  

}
