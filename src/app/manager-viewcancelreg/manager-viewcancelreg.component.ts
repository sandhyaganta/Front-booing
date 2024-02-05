
import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-manager-viewcancelreg',
  templateUrl: './manager-viewcancelreg.component.html',
  styleUrls: ['./manager-viewcancelreg.component.css']
})
export class ManagerViewcancelregComponent {
  alluser:any
  constructor(private api:UserServiceService){}
  ngOnInit():void{

    this.api.bookingDetails().subscribe((res: any) => {
      

      for (let index = 0; index < res.length; index++){
        const element = res[index];
        console.log(element,"e");
        
  
        this.api.getflight1(element.flightid).subscribe((res1:any) => {
          
          console.log(res1,'ddd');
          // this.alluser.push({
          //   bookdata: element,
          //   flightdata: res1,
          // });
          this.alluser=[{"flightdata":res1,"bookdata":element}];
          
            console.log(this.alluser,"this.alluser");
         
          
          
        });
  
          
      }
  
    
      
    });
  


  }


}
