import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {form}
import { AppComponent } from './app.component';
import { SecondComponent } from './second.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
