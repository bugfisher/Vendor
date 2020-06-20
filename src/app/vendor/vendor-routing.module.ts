import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test1Component } from './test1/test1.component';
//import { DropdownsComponent } from './dropdowns.component';
//import { BrandButtonsComponent } from './brand-buttons.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
     children: [
       {
         path: '',
        redirectTo: 'test1'
       },
       {
        path: 'test1',
         component: Test1Component,
         data: {
           title: 'Test1'
         }
       }
       
     ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule {}
