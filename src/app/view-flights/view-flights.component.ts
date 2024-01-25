import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css'],
})
export class ViewFlightsComponent {
  flights:any;
  updateForm!: FormGroup;
  constructor(private api: ServiceService, private form: FormBuilder) {}
  ngOnInit(): void {
    this.api.getFlights().subscribe((res: any) => {
      this.flights=res;
      localStorage.setItem("id",res._id)
      console.log(this.flights);
    });

    this.updateForm = this.form.group({
      flightnumber: [''],
      flightname: [''],
      arrivaldate: [''],
      arrivaltime: [''],
      depaturedate: [''],
      depaturetime: [''],
      seats: [''],
      amount: [''],
      source: [''],
      destination: [''],
      id: [''],
    });
  }

  deleteflight(id: any) {
    this.api.deleteFlight(id).subscribe((res: any) => {
      window.location.reload();
    });
  }

  flightedit(d: any) {
    console.log(d, 'updated values');
    this.updateForm.patchValue({
      flightnumber: d.flightnumber,
      flightname: d.flightname,
      arrivaldate: d.arrivaldate,
      arrivaltime: d.arrivaltime,
      depaturedate: d.depaturedate,
      depaturetime: d.depaturetime,
      seats: d.seats,
      amount: d.amount,
      source: d.source,
      destination: d.destination,
      id: d._id,
    });
  }

  updated() {
    console.log(this.updateForm.value, 'updated values');
    this.api.updatedFlight(this.updateForm.value).subscribe((res: any) => {
      window.location.reload();
    });
  }
}
