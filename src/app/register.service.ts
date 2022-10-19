import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ruser } from './ruser';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

      baseUrl="http://localhost:9191/registerdata"
  //  baseUrl="http://localhost:9999/registeruser"
      baseUrl1="http://localhost:9191/category/Tablet"
      baseUrl2="http://localhost:9191/category/Syrup"
      baseUrl3="http://localhost:9191/category/Energy Product"
      baseUrl4="http://localhost:9191/category/Pain Relif"

  
 
   constructor( private httpClient : HttpClient) { }

registerUser(ruser:Ruser): Observable<object>{

  console.log(ruser);

  return this.httpClient.post(`${this.baseUrl}`,ruser);

  
}


}
