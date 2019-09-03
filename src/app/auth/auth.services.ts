import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class authServices {
    constructor(
        private _http: HttpClient
    ){}
    login(){
        return new Promise((resolve, reject)=>{
            // this._http.get('')
        });
    }
}