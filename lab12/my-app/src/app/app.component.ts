import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
       <div><app-counter [counterValue]="myCount" (change)="countChange($event)"></app-counter>
       <h3> Counter value : {{myCount}}</h3>
   `,
styles: [`div{ border: 1px solid gray; width: 700px}`]
   


})
export class AppComponent {
  title = 'app';
  myCount: number = 10;
  countChange(event) {
    this.myCount = event;
  
  }
}

