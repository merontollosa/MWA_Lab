import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { DbService } from './db.service';
import {  myRoutes} from './app.route';
import { ProfileComponent } from './profile/profile.component';
import { GuardsGuard } from "./guards.guard";



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GuardsGuard,
    myRoutes
  ],
  providers: [DbService,GuardsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
