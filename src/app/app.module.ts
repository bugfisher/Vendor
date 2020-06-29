import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import {ReactiveFormsModule} from '@angular/forms';
 import { RecaptchaModule } from 'ng-recaptcha';
 import {HttpClientModule} from '@angular/common/http';
 import { FormService } from './views/form.service';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

//



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule  
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test1/test2/test2.component';
import { TestnavComponent } from './test1/testnav/testnav.component';
import { TestProgressComponent } from './test1/testprogress/testprogress.component';
import { Subpage1Component } from './views/subpage1/subpage1.component';
import { VendorComponent } from './vendor/vendor.component';
//import { VendorComponent } from './vendor/vendor.component';

import {VendorModule} from './vendor/vendor.module';
import { Sub2Component } from './views/sub2/sub2.component';

//Image cropper
import { ImageCropperModule } from 'ngx-image-cropper';




@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ImageCropperModule,
    ReactiveFormsModule,
     RecaptchaModule,
     HttpClientModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    Test1Component,
    Test2Component,
    TestnavComponent,
    TestProgressComponent,
    Subpage1Component,
    VendorComponent,
    Sub2Component
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    
  },FormService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
