import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
 };

@Injectable({
  providedIn: 'root'
})

export class UserService {
   userAPIURL:string = "http://demo3266467.mockable.io/user"

  constructor(private httpClient:HttpClient) { }
  createUser(user:any):Observable<string>{
    return this.httpClient.post<string>(this.userAPIURL,user,httpOptions);

  }
}

