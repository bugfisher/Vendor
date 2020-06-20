import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import {ReactiveFormsModule} from '@angular/forms';
 import { RecaptchaModule } from 'ng-recaptcha';


//import { ButtonsComponent } from './buttons.component';
//import { BrandButtonsComponent } from './brand-buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//import { DropdownsComponent } from './dropdowns.component';

// Buttons Routing
import { VendorRoutingModule } from './vendor-routing.module';







  
  import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule  
  } from '@coreui/angular';
import { Test1Component } from './test1/test1.component';
import { from } from 'rxjs';
  

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
  };

// Angular



@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
     RecaptchaModule,
     VendorRoutingModule
  ],
  declarations: [
    // ButtonsComponent,
    // DropdownsComponent,
    // BrandButtonsComponent
  Test1Component]
})
export class VendorModule { }
