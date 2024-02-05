import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  jwttoken():any{
    const header={
      headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    };
    return header;
  }

  private getUrl='http://localhost:5000';

  constructor(private http:HttpClient) { }

  userCreate(data:any){
    return this.http.post('http://localhost:5000/user/create',data);
  }
  userLogin(data:any){
    return this.http.post("http://localhost:5000/user/userlogin",data);
  }
  getuser(id:any){
    return this.http.get("http://localhost:5000/user/getById/"+id,this.jwttoken());
  }
  userupdate(data:any){
    return this.http.put("http://localhost:5000/user/updateById/"+data.id,data,this.jwttoken());
  }
  getallusers(){
    return this.http.get("http://localhost:5000/user/get/users",this.jwttoken());
  }
  getFlights(){
    return this.http.get("http://localhost:5000/flight/get/flight",this.jwttoken());
  }
  updatedFlight(data:any){
    return this.http.put("http://localhost:5000/flight/updateById/"+data.id,data,this.jwttoken());
  }
  booking(data:any){
    return this.http.post("http://localhost:5000/user/book",data,this.jwttoken())
  }
  bookingDetails(){
    return this.http.get("http://localhost:5000/user/get/book",this.jwttoken());
  }
  getflight1(id:any){
    return this.http.get("http://localhost:5000/flight/getById/"+id,this.jwttoken());
  }
  updated(data:any){
    data.status = 2
    return this.http.put("http://localhost:5000/user/book/updateById/"+data._id,data,this.jwttoken());
  }
}
