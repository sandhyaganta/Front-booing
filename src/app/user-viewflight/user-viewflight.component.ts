import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-viewflight',
  templateUrl: './user-viewflight.component.html',
  styleUrls: ['./user-viewflight.component.css'],
})
export class UserViewflightComponent {
  flights: any;
  fp: any;
  totalAmount: any;
  a: any;
  book1: any;
  bi: any;
  Registrationform!: FormGroup;
  constructor(
    private api: UserServiceService,
    private form: FormBuilder,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.api.getFlights().subscribe((res: any) => {
      this.flights = res;
      console.log(this.flights);

     
      
    });

    this.Registrationform = this.form.group({
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
      bookingid: [''],
      bookingdate: [''],
      username: [''],
      noofseats: [''],
      totalamount: [''],
    });
  }
  bookflight(d: any) {
    let username = localStorage.getItem('username');
    const book = Math.floor(Math.random() * 1000);
    this.bi = 'BKI' + book;
    console.log(this.bi);
    this.Registrationform.patchValue({
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
      bookingid: this.bi,
      username: username,
      noofseats: '',
      totalamount: this.totalAmount,
    });
    this.fp = d.amount;
    console.log(this.fp, 'd.amount');
  }

  calculate(v: any) {
    this.a = v.target.value;
    console.log(this.a);

    this.totalAmount = this.a * this.fp;

    console.log(this.totalAmount, 'tttt');
    this.Registrationform.patchValue({
      totalamount: this.totalAmount,
    });
  }
  
  book() {
    let data={
    ...this.Registrationform.value,
    totalamount: this.totalAmount,

    }
    console.log(data, 'registration values');
    this.api.booking(data).subscribe((res: any) => {
      localStorage.setItem('bi', res.bi);

      this.book1 = res;
      console.log(this.book1, 'book');
    });
  }
}
