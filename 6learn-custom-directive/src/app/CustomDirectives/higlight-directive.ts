import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHiglightDirective]',
})
export class HiglightDirective {
  constructor(private element:ElementRef,private renderer:Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter(){
    console.log('on mouseenter');
    
    this.renderer.addClass(this.element.nativeElement,'scale')
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    console.log('on mouseleave');
    this.renderer.removeClass(this.element.nativeElement,'scale')
  }
}
