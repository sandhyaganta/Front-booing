import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-addflights',
  templateUrl: './manager-addflights.component.html',
  styleUrls: ['./manager-addflights.component.css']
})
export class ManagerAddflightsComponent  implements OnInit{
  Flightform!:FormGroup;
  constructor( private api:ServiceService, private form:FormBuilder, private route:Router){}
   ngOnInit(): void {
    this.Flightform=this.form.group({
      flightnumber:[''],
      flightname:[''],
      arrivaldate:[''],
      arrivaltime:[''],
      depaturedate:[''],
      depaturetime:[''],
      seats:[''],
      amount:[''],
      source:[''],
      destination:['']
    }) 
   }
   flight(){
    console.log(this.Flightform.value,"add flight successfuly")
    this.api.addFlight(this.Flightform.value).subscribe((res:any)=>{
      console.log(res,"flight check")
      this.route.navigate(["admin1/view"])
    })
   
   }
  
}
