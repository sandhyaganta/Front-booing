import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from"@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  jwttoken():any{
    const header={
      headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    };
    return header;
  }
  private getUrl='http://localhost:5000';

  constructor(private http:HttpClient) { }
  adminCreate(data:any){
    return this.http.post("http://localhost:5000/admin/create",data);
  }
  adminLogin(data:any){
    return this.http.post("http://localhost:5000/admin/login",data);
  }
  addFlight(data:any){
    return this.http.post("http://localhost:5000/flight/creates",data,this.jwttoken());
  }
  getFlights(){
    return this.http.get("http://localhost:5000/flight/get/flight",this.jwttoken());
  }
  deleteFlight(id:any){
     return this.http.delete("http://localhost:5000/flight/deleteById/"+id,this.jwttoken());
  }
  updatedFlight(data:any){
    return this.http.put("http://localhost:5000/flight/updateById/"+data.id,data,this.jwttoken());
  }
  getallusers(){
    return this.http.get("http://localhost:5000/user/get/users",this.jwttoken());
  }
  getflight1(id:any){
    return this.http.get("http://localhost:5000/flight/getById"+id,this.jwttoken());
  }
}
