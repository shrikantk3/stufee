import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup; 
    constructor(private formBuilder:FormBuilder, private authAPI:AuthService, private _router:Router){
      this.loginForm = formBuilder.group({
          email:['',[Validators.required]],
          username:['',[Validators.required]],
          password:['',[Validators.required]]
      })
    }
    ngOnInit(){

    }
    loginSubmit(){
      console.log('loginForm :',this.loginForm.value);
      // this.authAPI.login(this.loginForm.value).subscribe((res:any)=>{
      //     console.log(res);
      //     localStorage.setItem('token',res.token);
      //     localStorage.setItem('userId',res.data[0].userid);
      //     localStorage.setItem('login','true');
      //   setTimeout(()=>{

      //     this._router.navigate(['/app/admin']);
      //   },500)
      // })
    }
    ngOnDestroy(){
      
    }
}
