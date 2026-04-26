import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  // @HostBinding-Decorator binds a property of host element to a property of directive or a component class
  constructor(private element:ElementRef,private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor : string = ''
  @HostBinding('style.border') border : string = ''
  @HostBinding('style.color') textColor : string = ''

  @HostBinding('title') title : string = ''

  ngAfterViewInit(){
    this.title = this.element.nativeElement.innerHTML
  }

  @HostListener('mouseenter')
  onHover(){
    this.backgroundColor = 'white'
    this.textColor='#28282B'
    this.border='solid 2px #28282B'
  }

  @HostListener('mouseleave')
  onHoverOut(){
    this.textColor=''
    this.backgroundColor=''
    this.border =''
  }

}
