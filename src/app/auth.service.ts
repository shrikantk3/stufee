import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ) { }
  login(req){
   // let httpOptions=new HttpHeaders({ 'Content-Type': 'application/json'});
     //return new Observable(()=>{
       // this.http.post('',req, httpOptions);
    // }); 
  }
  logedIn(){
     return !!localStorage.getItem('token');  
  }
}
