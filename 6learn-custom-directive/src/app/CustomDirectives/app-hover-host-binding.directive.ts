import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHoverHostBinding]',
})
export class AppHoverHostBinding {
  constructor(private element:ElementRef,private renderer:Renderer2) {}

  @HostBinding('style.backgroundColor') bgColor : string = ''
  @HostBinding('style.color') color : string = ''
  @HostBinding('style.padding') padding : string = ''

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement,'cursor','pointer')
    this.bgColor = 'grey'
    this.color = 'white'
    this.padding = '10px'
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.bgColor = 'white'
    this.color = 'grey'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.bgColor = 'grey'
    this.color = 'white'
  }
}
