import { Component } from '@angular/core';
import {FormBuilder, Validators, EmailValidator} from '@angular/forms';
//import {ValidationService} from './validation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent
{
  constructor(private fb:FormBuilder) { }

  get username()
  {
    return this.login.get('username');
  }

  get password()
  {
    return this.login.get('password');
  }

  
  login = this.fb.group({

    username:['', [Validators.required,Validators.minLength(3)]],
    
    password:['', [Validators.required]],
    
    
  });

  onSubmit(){
    console.log(this.login.value);
  }


}
