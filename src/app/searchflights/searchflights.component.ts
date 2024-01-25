import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.css']
})
export class SearchflightsComponent {
  Registrationform!:FormGroup
  flight1:any
  destination:any
  source:any
  constructor(private api:UserServiceService, private form:FormBuilder){}
  ngOnInit():void{
   
    this.Registrationform=this.form.group({
      source:[''],
      destination:[''],
      // flightnumber:[''],
      // flightname:[''],
      // arrivaldate:[''],
      // arrivaltime:[''],
      // depaturedate:[''],
      // depaturetime:[''],
      // seats:[''],
      // amount:[''],
    })
    
  }
  flight(){
    
    this.api.getFlights().subscribe((res: any) => {
      this.flight1=res;
      console.log(this.flight1);
//       let found = [];
// const searchTerm = 'Eight Line1';
// found = test.records.filter(function(element) {
//   return element.sensor.toLowerCase() == searchTerm.toLowerCase();
// });
          let flight=[];
          const searchflight='source ,destination';
          flight=this.flight1.filter(function(element:any){
            return element.source.toLowerCase() == searchflight.toLowerCase() && element.destination.toLowerCase() == searchflight.toLowerCase()

          });

          
    });

}
}