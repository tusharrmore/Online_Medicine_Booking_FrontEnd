import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

   private baseUrl="http://localhost:9191/user/verify";
  // private baseUrl="http://localhost:9999/registeruser";
  constructor(private httpClient :HttpClient) { }

  loginUser(user:User):Observable<object>{

   
    console.log(user)
    console.log(user.password);
    return this.httpClient.post(`${this.baseUrl}`,user);

  }
}
