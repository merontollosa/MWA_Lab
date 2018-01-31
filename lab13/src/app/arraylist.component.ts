import { Component, OnInit, Input  } from '@angular/core';
import { MyvisibliltyDirective } from './myvisiblilty.directive';

@Component({
  selector: 'app-arraylist',
  template: `
    <ul>
       <li appUpper appMycolor appMycolor *ngFor="let name of names" >
          {{name}}
        </li>
        
    </ul>
  `,
  styleUrls: ['./arraylist.component.css']
})
export class ArraylistComponent implements OnInit {
 @Input()
   names= [];
  ngOnInit() {

  }

}
