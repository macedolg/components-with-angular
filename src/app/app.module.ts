import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponentModule } from './my-component/my-component.module';
import { NomeComponentComponent } from './components/nome-component/nome-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product-service.service';
import { SecondComponentComponent } from './second-component/second-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SecondComponentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
