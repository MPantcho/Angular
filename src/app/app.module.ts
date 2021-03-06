import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiModule } from './rest';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MComponent } from './m/m.component';
import { ListComponent } from './product/list/list.component';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MComponent,
  ],
  imports: [
    BrowserModule,
    ApiModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
