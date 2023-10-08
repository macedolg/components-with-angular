import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyComponentComponent } from './my-component.component';
import { ProductService } from '../services/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
   // MyComponentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  exports: [
    //MyComponentComponent
  ]
})
export class MyComponentModule { }
