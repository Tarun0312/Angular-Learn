import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // @HostListener ->Decorator listens to a dom event on the host element and react to that event by executing an event handler method

  constructor(private element:ElementRef,private renderer:Renderer2) { 

  }

  @HostListener('mouseenter')
  onMouseEnter(){
    // console.log('mouseenter');
    this.renderer.addClass(this.element.nativeElement,'ekart--product--item-hover')
  }

  @HostListener('mouseleave')
  onMouseOut(){
    // console.log('mouseleave');
    this.renderer.removeClass(this.element.nativeElement,'ekart--product--item-hover')

  }

}
