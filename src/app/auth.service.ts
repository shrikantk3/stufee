import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   urlstr:string = environment.url;
  constructor( private http:HttpClient ) { }
  login(body){
    const baseUrl = `${this.urlstr}/auth/login`
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };
    console.log(baseUrl, body, httpOptions);
    //  return  this.http.post(baseUrl,body, httpOptions);
    //  }); 
  }
  logedIn(){
     return !!localStorage.getItem('token');  
  }
}
