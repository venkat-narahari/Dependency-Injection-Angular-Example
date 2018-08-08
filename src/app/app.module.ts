import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component1 } from './component1.component';
import { Component2 } from './component2.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
