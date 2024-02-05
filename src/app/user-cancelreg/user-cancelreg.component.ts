import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-cancelreg',
  templateUrl: './user-cancelreg.component.html',
  styleUrls: ['./user-cancelreg.component.css'],
})
export class UserCancelregComponent {
  alluser: any;
  constructor(private api: UserServiceService) {}
  ngOnInit(): void {
    this.api.bookingDetails().subscribe((res: any) => {
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        console.log(element, 'e');

        this.api.getflight1(element.flightid).subscribe((res1: any) => {
          console.log(res1, 'ddd');
          this.alluser = [{ flightdata: res1, bookdata: element }];

          console.log(this.alluser, 'this.alluser');
        });
      }
    });
  }
}
