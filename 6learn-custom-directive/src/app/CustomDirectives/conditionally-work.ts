import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appConditionallyWork]',
})
export class ConditionallyWork {
  constructor(private element:ElementRef,private renderer:Renderer2) {}

  // Here also directive name same as input property without creating alias
  // when using set keyword on property,it will now act as function
  @Input() set appConditionallyWork(disableProduct : boolean){
    if(disableProduct){
      this.renderer.addClass(this.element.nativeElement,'disable')
    }
  }
}
