import { Directive,ElementRef, HostListener, Renderer2  } from '@angular/core';

@Directive({
  selector: '[uIMaxValue]'
})
export class MaxValueDirective {
  configuredValue:number;
  currentValue:number;
 

  constructor(private el:ElementRef,private renderer:Renderer2) {
    this.configuredValue = + el.nativeElement.attributes['uIMaxValue'].value

    console.log(el.nativeElement);
    console.log(el.nativeElement.attributes['uIMaxValue'].value);
   }

  @HostListener('change') onValueChange(){
    this.currentValue = +this.el.nativeElement.value;
    console.log(this.currentValue);
    if(this.currentValue> this.configuredValue){
      console.log(this.renderer);
      const node = this.renderer.createElement('div'); //create div element
     let text = this.renderer.createText("input value should be greater than configured value");
     this.renderer.appendChild(node,text);
     this.renderer.addClass(node,"alert");
     this.renderer.addClass(node,"alert-danger");
     this.renderer.appendChild(this.el.nativeElement.parentElement,node);


    }
  }


}
