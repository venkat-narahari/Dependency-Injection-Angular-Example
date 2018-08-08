import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component1 } from './component1.component';
import { Component2 } from './component2.component';
import { DataService } from './data.service';



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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
