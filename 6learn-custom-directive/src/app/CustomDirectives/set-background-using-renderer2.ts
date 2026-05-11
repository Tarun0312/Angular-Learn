import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackgroundUsingRenderer2]',
})
export class SetBackgroundUsingRenderer2 {
  constructor(private element:ElementRef,private renderer:Renderer2) {}

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','green');
    this.renderer.setStyle(this.element.nativeElement,'color','yellow')

    console.dir(this.element.nativeElement);
    
    // setting attribute dynamically
    this.renderer.setAttribute(this.element.nativeElement,'title',this.element.nativeElement.innerText)

    // adding class to dom element using renderer
    this.renderer.addClass(this.element.nativeElement,'button')
  }
}
