import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class Appstyle {
  constructor(private element:ElementRef,private renderer:Renderer2) {}


  // when receiving value via input ,if u want to perform some business logic,use setter method by using set keyword on property name
  @Input() set appStyle(style : Object){
    const entries = Object.entries(style ?? {})
    for(let item of entries){
      console.log(item);
      const [cssProperty,cssPropertyValue] = item
      this.renderer.setStyle(this.element.nativeElement,cssProperty,cssPropertyValue)
    }

  }
}
