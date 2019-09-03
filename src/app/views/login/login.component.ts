import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../auth.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup; 
    constructor(private formBuilder:FormBuilder, private authAPI:AuthService ){
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
      this.authAPI.login(this.loginForm.value).subscribe((res)=>{
          console.log(res);
      })
    }
}
