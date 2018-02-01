import { Directive, ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core/src/render/api';
import { HostBinding } from '@angular/core/src/metadata/directives';


@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {
  
  constructor(private e1: ElementRef){ 
   this.upper();
  }

 public upper(){
   this.e1.nativeElement.style.textTransform = "uppercase"
 }
}
