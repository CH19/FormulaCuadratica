import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormuComponent } from './formu/formu.component';

import {NgModel, FormsModule} from '@angular/forms';
import { CounterComponent } from './counter/counter.component'
import { NavComponent } from './products/nav/nav.component';

// Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CatalogoComponent } from './products/catalogo/catalogo.component';
import { ProductComponent } from './products/product/product.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { YardSaleLogoComponent } from './products/yard-sale-logo/yard-sale-logo.component';



@NgModule({
  declarations: [
    AppComponent,
    FormuComponent,
    CounterComponent,
    CatalogoComponent,
    ProductComponent,
    NavComponent,
    YardSaleLogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
