import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-manager-viewuser',
  templateUrl: './manager-viewuser.component.html',
  styleUrls: ['./manager-viewuser.component.css']
})
export class ManagerViewuserComponent {
  users:any
  constructor(private api:UserServiceService){}
  ngOnInit():void{
    this.api.getallusers().subscribe((res:any)=>{
      this.users=res;
    })
  }

}
