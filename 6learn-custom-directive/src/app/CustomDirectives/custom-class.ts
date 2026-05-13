import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomClass]',
})
export class CustomClass {
  constructor(private element:ElementRef,private renderer:Renderer2) {}
  
  // when receiving value via input ,if u want to perform some business logic,use setter method by using set keyword on property name
  // using setter method
  // @Input() set appCustomClass(value:Object){
  //   const entries = Object.entries(value ?? {})
  //   for(let element of entries){
  //     const [className,classApply] = element
  //     if(classApply)
  //       this.renderer.addClass(this.element.nativeElement,className)
  //   }
  // }

  // without using setter method 
    @Input() appCustomClass : Object;

    ngOnInit(){
      const entries = Object.entries(this.appCustomClass ?? {})
      for(let element of entries){
      const [className,classApply] = element
      if(classApply)
        this.renderer.addClass(this.element.nativeElement,className)
    }
    }

    // bettwer way is setter method,if u handle property changes separtely in setter instead of ngOnInit
}
