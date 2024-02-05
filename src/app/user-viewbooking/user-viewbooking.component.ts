import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-viewbooking',
  templateUrl: './user-viewbooking.component.html',
  styleUrls: ['./user-viewbooking.component.css'],
})
export class UserViewbookingComponent {
  alluser: any;
  constructor(private api: UserServiceService) {}
  ngOnInit(): void {
    this.alluser = [];
    this.api.bookingDetails().subscribe((res: any) => {
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
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
}
