import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArraylistComponent } from './arraylist.component';
import { UpperDirective } from './upper.directive';
import { MyvisibliltyDirective } from './myvisiblilty.directive';
import { MycolorDirective } from './mycolor.directive';


@NgModule({
  declarations: [
    AppComponent,
    ArraylistComponent,
    UpperDirective,
    MyvisibliltyDirective,
    MycolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
