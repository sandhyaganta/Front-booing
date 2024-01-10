import { Injectable } from '@angular/core';
import{HttpClient} from"@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private getUrl='http://localhost:5000';

  constructor(private http:HttpClient) { }
  adminCreate(data:any){
    return this.http.post("http://localhost:5000/admin/create",data);
  }
  adminLogin(data:any){
    return this.http.post("http://localhost:5000/admin/login",data);
  }
  addFlight(data:any){
    return this.http.post("http://localhost:5000/flight/create",data);
  }
  getFlights(){
    return this.http.get("http://localhost:5000/flight/get/flight");
  }
  deleteFlight(id:any){
     return this.http.delete("http://localhost:5000/flight/deleteById/"+id);
  }
  updatedFlight(data:any){
    return this.http.put("http://localhost:5000/flight/updateById/"+data.id,data);
  }
}
