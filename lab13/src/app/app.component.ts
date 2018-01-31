import { Component } from '@angular/core';

import { ArraylistComponent } from './arraylist.component';
import { MyvisibliltyDirective } from './myvisiblilty.directive';


@Component({
  selector: 'app-root',
  template:`
           <h1 appMyvisiblilty=false>Name List</h1>
           <app-arraylist [names]='values'></app-arraylist>`,

})
export class AppComponent {
  title = 'app';
  values =['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];


}
