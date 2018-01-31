import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';
import { Event } from '_debugger';
//import {  } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-counter',
  template: `
  <div>
  <button (click)="decrement()">-</button>
  <label>{{counterValue}}</label>
  <button (click)="increment()">+</button>
</div>`,
styles: ['div{ border: 1px solid red; width: 400px}`,`button{ border: 1px solid gray}']
 
})
export class CounterComponent  {
@Input() counterValue : number;
@Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.counterValue++;
    this.change.emit(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    this.change.emit(this.counterValue);
  }
}
