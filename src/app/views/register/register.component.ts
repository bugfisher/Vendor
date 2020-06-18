import { Component } from '@angular/core';
import {FormBuilder, Validators, EmailValidator} from '@angular/forms';
import {ValidationService} from './validation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(private fb:FormBuilder) { }

  get firstname()
  {
    return this.registration.get('firstname');
  }

  get email()
  {
    return this.registration.get('email');
  }

  get lastname()
  {
    return this.registration.get('lastname');
  }

  get mobile()
  {
    return this.registration.get('personalmobile');
  }

  get studyroomname()
  {
    return this.registration.get('studyroomname');
  }

  registration = this.fb.group({

    firstname:['', [Validators.required,Validators.minLength(3)]],
    lastname:['', [Validators.required,Validators.minLength(3)]],
    email:['', [ValidationService.emailValidator,Validators.required]],
    password:['', [ValidationService.passwordValidator]],
    confirmPassword:['', []],
    personalmobile:['+91', [ValidationService.mobileValidator,Validators.required]],
    studyroomname:['', [Validators.required,Validators.minLength(3)]]
    
  });

  onSubmit(){
    console.log(this.registration.value);
  }

   resolved(captchaResponse: string) {
     console.log(`Resolved captcha with response: ${captchaResponse}`);
 }

}
