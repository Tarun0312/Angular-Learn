import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomPropertyBindingDirective]',
})
export class CustomPropertyBindingDirective {

  // Without alias
  // @Input() bgColor : string = 'grey'
  // @Input() textColor : string = 'white'


  // With alias
  //  we  can also use directive name as property by creating an alias
  // @Input('appCustomPropertyBindingDirective') bgColor : string | undefined ='grey'  //here appCustomPropertyBindingDirective is an alias


  // Receiving only object with alias
  @Input('appCustomPropertyBindingDirective') bgAndTextStyle : {bgColor:string,textColor:string} 
  constructor(private element:ElementRef,private renderer:Renderer2) {}

  ngOnInit(){
    //without object
    // this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.bgColor)
    // this.renderer.setStyle(this.element.nativeElement,'color',this.textColor)


    // using object
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.bgAndTextStyle.bgColor)
    this.renderer.setStyle(this.element.nativeElement,'color',this.bgAndTextStyle.textColor)
  }
}
