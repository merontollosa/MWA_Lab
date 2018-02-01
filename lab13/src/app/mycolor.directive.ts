import { Directive ,ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
 color :[String];
 size :number
  constructor(private e1: ElementRef) { 
    this.color= ['red','pink','blue','yellow','green'];
    this.size=this.color.length }

 @HostListener('click') foo(){
 
  this.e1.nativeElement.style.color=this.color[ Math.floor(Math.random()*this.color.length)];
 }


}