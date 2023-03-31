import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductCategoryComponent } from './component/product-category/product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
