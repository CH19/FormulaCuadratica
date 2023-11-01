import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormuComponent } from './formu/formu.component';

import {NgModel, FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    FormuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
