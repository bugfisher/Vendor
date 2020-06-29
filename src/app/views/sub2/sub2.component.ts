import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, EmailValidator} from '@angular/forms';
//import {ValidationService} from './validation.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get ac_nonac()
  {
    return this.subpage2.get('ac_nonac');
  }

  get seat()
  {
    return this.subpage2.get('seat');
  }
//Monday Get function
  get monopen()
  {
    return this.subpage2.get('monopen');
  }
  get monopen_type()
  {
    return this.subpage2.get('monopen_type');
  }
  get monclose()
  {
    return this.subpage2.get('monclose');
  }
  get monclose_type()
  {
    return this.subpage2.get('monclose_type');
  }
  get mon_holiday()
  {
    return this.subpage2.get('mon_holiday');
  }

  //Tuesday get function

  get tueopen()
  {
    return this.subpage2.get('tueopen');
  }
  get tueopen_type()
  {
    return this.subpage2.get('tueopen_type');
  }
  get tueclose()
  {
    return this.subpage2.get('tueclose');
  }
  get tueclose_type()
  {
    return this.subpage2.get('tueclose_type');
  }
  get tue_holiday()
  {
    return this.subpage2.get('tue_holiday');
  }

//Wednesday get function

get wedopen()
  {
    return this.subpage2.get('wedopen');
  }
  get wedopen_type()
  {
    return this.subpage2.get('wedopen_type');
  }
  get wedclose()
  {
    return this.subpage2.get('wedclose');
  }
  get wedclose_type()
  {
    return this.subpage2.get('wedclose_type');
  }
  get wed_holiday()
  {
    return this.subpage2.get('wed_holiday');
  }

//Thursday get Function

get thursopen()
  {
    return this.subpage2.get('thursopen');
  }
  get thursopen_type()
  {
    return this.subpage2.get('thursopen_type');
  }
  get thursclose()
  {
    return this.subpage2.get('thursclose');
  }
  get thursclose_type()
  {
    return this.subpage2.get('thursclose_type');
  }
  get thurs_holiday()
  {
    return this.subpage2.get('thurs_holiday');
  }

//Friday Get Function

get friopen()
  {
    return this.subpage2.get('friopen');
  }
  get friopen_type()
  {
    return this.subpage2.get('friopen_type');
  }
  get friclose()
  {
    return this.subpage2.get('friclose');
  }
  get friclose_type()
  {
    return this.subpage2.get('friclose_type');
  }
  get fri_holiday()
  {
    return this.subpage2.get('fri_holiday');
  }

  //Sat get function

  get satopen()
  {
    return this.subpage2.get('satopen');
  }
  get satopen_type()
  {
    return this.subpage2.get('satopen_type');
  }
  get satclose()
  {
    return this.subpage2.get('satclose');
  }
  get satclose_type()
  {
    return this.subpage2.get('satclose_type');
  }
  get sat_holiday()
  {
    return this.subpage2.get('sat_holiday');
  }

//Sunday get function

get sunopen()
  {
    return this.subpage2.get('sunopen');
  }
  get sunopen_type()
  {
    return this.subpage2.get('sunopen_type');
  }
  get sunclose()
  {
    return this.subpage2.get('sunclose');
  }
  get sunclose_type()
  {
    return this.subpage2.get('sunclose_type');
  }
  get sun_holiday()
  {
    return this.subpage2.get('sun_holiday');
  }





  get idproof()
  {
    return this.subpage2.get('idproof');
  }

  get upload()
  {
    return this.subpage2.get('upload');
  }

  get desc()
  {
    return this.subpage2.get('desc');
  }

 

  subpage2 = this.fb.group({

    ac_nonac:['',Validators.required],
    seat:['',Validators.required],

    monopen:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    monopen_type:['',Validators.required],
    monclose:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    monclose_type:['',Validators.required],
    mon_holiday:[''],

    tueopen:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    tueopen_type:['',Validators.required],
    tueclose:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    tueclose_type:['',Validators.required],
    tue_holiday:[''],

    wedopen:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    wedopen_type:['',Validators.required],
    wedclose:['',Validators.required],
    wedclose_type:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    wed_holiday:[''],

    thursopen:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    thursopen_type:['',Validators.required],
    thursclose:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    thursclose_type:['',Validators.required],
    thurs_holiday:[''],

    friopen:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    friopen_type:['',Validators.required],
    friclose:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    friclose_type:['',Validators.required],
    fri_holiday:[''],

    satopen:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    satopen_type:['',Validators.required],
    satclose:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    satclose_type:['',Validators.required],
    sat_holiday:[''],

    sunopen:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    sunopen_type:['',Validators.required],
    sunclose:['',[Validators.required,Validators.min(0),Validators.max(12)]],
    sunclose_type:['',Validators.required],
    sun_holiday:[''],

    idproof:['',Validators.required],
    upload:['',Validators.required],
    desc:['',Validators.required]

    

    
    
  });

  imageChangedEvent: any = '';
    croppedImage: any = '';
    button:boolean=true;
    preview:boolean=true;
    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
        this.button=false;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

    toggle()
    {
      this.preview=false;
    }

  onSubmit(){
    console.log(this.subpage2.value);
  }

  change()
  {
     this.tueopen.setValue(this.monopen.value);
  }

}
