import { Directive, Input, ElementRef } from '@angular/core';


@Directive({
  selector: '[appMyvisiblilty]'
})
export class MyvisibliltyDirective {
@Input() val: boolean;
constructor(private e1 : ElementRef){
 
  this.ishidden(this.val);
} 

public ishidden(str : boolean){

  if(str){
    this.e1.nativeElement.style.display='none';
   }
   else if(!str){
    this.e1.nativeElement.style.display='block';
   }
}
}
