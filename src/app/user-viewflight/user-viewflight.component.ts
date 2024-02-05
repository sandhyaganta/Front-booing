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
  filghtDetails: any;
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
      userid: [''],
      flightid: [''],
      bookingid: [''],
      bookingdate: [''],
      noofseats: [''],
      totalamount: [''],
      status: 1,
    });
  }
  bookflight(d: any) {
    this.filghtDetails = d;
    let userid = localStorage.getItem('id');
    const book = Math.floor(Math.random() * 1000);
    this.bi = 'BKI' + book;
    console.log(this.bi);
    this.Registrationform.patchValue({
      userid: userid,
      flightid: d._id,
      bookingid: this.bi,
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
    let data = {
      ...this.Registrationform.value,
      totalamount: this.totalAmount,
    };
    console.log(data, 'registration values');
    this.api.booking(data).subscribe((res: any) => {
      this.book1 = res;
      console.log(this.book1, 'book');
    });
  }
}
