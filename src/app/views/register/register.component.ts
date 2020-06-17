import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
// import {ValidationService} from './validation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(private fb:FormBuilder) { }

  registration = this.fb.group({

    firstname:['', []],
    lastname:['', []],
    email:['', []],
    password:['', []],
    confirmPassword:['', []],
    personalmobile:['+91', []],
    studyroomname:['', []]
    
  });

  onSubmit(){
    console.log(this.registration.value);
  }

//   resolved(captchaResponse: string) {
//     console.log(`Resolved captcha with response: ${captchaResponse}`);
// }

}
