import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  registrationForm = this.fb.group({

    firstname:[' '],
    lastname:[' '],
    email:[' '],
    password:[' '],
    confirmPassword:[' '],
    personalmobile:[' '],
    studyroomname:[' '],
    city:[' '],
    area:[' '],
    state:[' '],



  });

  onSubmit(){

  }

}
