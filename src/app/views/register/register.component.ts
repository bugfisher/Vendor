import { Component } from '@angular/core';
import {FormBuilder, Validators, EmailValidator, Form} from '@angular/forms';
import {ValidationService} from './validation.service';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,private FormService:FormService,private router: Router) { }

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

  get test_file()
  {
    return this.registration.get('test_file');
  }

  registration = this.fb.group({

    firstname:['', [Validators.required,Validators.minLength(3)]],
    lastname:['', [Validators.required,Validators.minLength(3)]],
    email:['', [ValidationService.emailValidator,Validators.required]],
    password:['', [ValidationService.passwordValidator]],
    confirmPassword:['', []],
    personalmobile:['+91', [ValidationService.mobileValidator,Validators.required]],
    studyroomname:['', [Validators.required,Validators.minLength(3)]],
    test_file:['']
    
  });

  private show_card:boolean = false;

  onSubmit(){
    console.log((this.registration.value));

    this.FormService.RegisterUser(this.registration.value).subscribe(res => console.log(res),
    err => console.log(err));

    this.show_card = true;
    window.scrollTo(0,0);

    this.startTimer();

    setTimeout(() => {
      this.router.navigate(['/login']);
  }, 5000);  //3.5s

  
   

  }
  timeLeft: number = 4;
  interval;


  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 4;
      }
    },1000)
  }

   resolved(captchaResponse: string) {
     console.log(`Resolved captcha with response: ${captchaResponse}`);
 }

 




}
