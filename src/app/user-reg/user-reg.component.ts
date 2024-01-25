import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  book1:any
  alluser:any
constructor(private api:UserServiceService){}
ngOnInit():void{
  this.api.bookingDetails().subscribe((res: any) => {

    for (let index = 0; index < res.length; index++){
      const element = res[index];
      console.log(element,"e");
      

      this.api.getflight1(element.id).subscribe((res1:any) => {
        
        console.log(res1,'ddd');
        this.alluser=[{"flightdata":res1,"userdata":element}];
        console.log(this.alluser,"this.alluser");
        // res[index]["book"] = res1
      })
        //  this.alluser = res
    }

    // console.log(this.alluser,'allusers');
    
  });
}
}
