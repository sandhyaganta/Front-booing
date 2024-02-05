import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css'],
})
export class UserRegComponent {
  book1: any;
  alluser: any = [];
  updateForm!: FormGroup;
  constructor(private api: UserServiceService, private form: FormBuilder) {}
  ngOnInit(): void {
    this.alluser = [];
    this.api.bookingDetails().subscribe((res: any) => {
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        console.log(element, "e");
        
        this.api.getflight1(element.flightid).subscribe((res1: any) => {
          
          this.alluser.push({
            bookdata: element,
            flightdata: res1,
          });
        });
      }
      console.log(this.alluser, 'alluser');
    });
  }

  bookedit(d: any) {
    console.log(d, 'updatedvalues');
    this.updateForm.patchValue({
      status: d.status,
    });
  }
  update(bookeddata: any) {
    console.log(bookeddata, 'bookeddata');
    this.api.updated(bookeddata).subscribe((res: any) => {
      console.log(res, 'res');

      window.location.reload();
    });
  }
}
