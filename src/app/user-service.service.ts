import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private getUrl='http://localhost:5000';

  constructor(private http:HttpClient) { }

  userCreate(data:any){
    return this.http.post('http://localhost:5000/user/create',data);
  }
  userLogin(data:any){
    return this.http.post("http://localhost:5000/user/userlogin",data);
  }
}
