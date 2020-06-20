import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, EmailValidator} from '@angular/forms';
import {ValidationService} from './validation.service';

@Component({
  selector: 'app-subpage1',
  templateUrl: './subpage1.component.html',
  styleUrls: ['./subpage1.component.css']
})
export class Subpage1Component implements OnInit {

  constructor(private fb:FormBuilder) { }

 private date = new Date();
 private year1 = this.date.getFullYear();



  ngOnInit(): void {
  }

  get add1()
  {
    return this.subpage1.get('add1');
  }

  get add2()
  {
    return this.subpage1.get('add2');
  }

  get city()
  {
    return this.subpage1.get('city');
  }

  get state()
  {
    return this.subpage1.get('state');
  }

  get postal()
  {
    return this.subpage1.get('postal');
  }

  get year()
  {
    return this.subpage1.get('year');
  }

  get studyroomname()
  {
    return this.subpage1.get('studyroomname');
  }

  subpage1 = this.fb.group({

    studyroomname:[''],
    add1:['', [Validators.required,Validators.minLength(3)]],
    add2:['',[Validators.required, Validators.minLength(3)]],
    city:['',[Validators.required]],
    state:['',[Validators.required]],
    postal:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
    year:['',[Validators.min(1980),Validators.max(this.year1)]]

    
    
  });

  onSubmit(){
    console.log(this.subpage1.value);
  }

}
