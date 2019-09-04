import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private _router:Router, private _authService:AuthService ){

  } 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  Observable<boolean> | Promise<boolean> | boolean{
    if(this._authService.logedIn()){
      return true;
    }else{
      this._router.navigate(['/login']);
      return false;
    }
  }

  
}
