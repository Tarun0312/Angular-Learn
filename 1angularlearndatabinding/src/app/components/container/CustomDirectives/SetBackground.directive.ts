import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackgroundDirective{
    // setBackground selector is used  wherever,then the instance SetBackgroundDirective is created ,On creting instance ,constructor will get run and that element reference is assigned to element.This is called DI(Dependency Injection)
    constructor(private element:ElementRef,private renderer:Renderer2){       
    }

    ngOnInit(){
        // this.element.nativeElement.style.backgroundColor='#36454F'
        // this.element.nativeElement.style.color='white'

        // Better way using renderer

    }

    ngAfterViewInit(){
        this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#36454F')
        this.renderer.setStyle(this.element.nativeElement,'color','white')
        this.renderer.setAttribute(this.element.nativeElement,'title',this.element.nativeElement.innerHTML)
    }


    // when we are using native Element property,it gives us direct access to DOM
    // Disadvantages of above
    // 1) Angular Keeps the component and View in sync using templates,data binding and change detection.All of them are bypassed when we update DOM element directly
    // 2)The dom manipluation works only ib browser.You won't be able to use app in web workers,server side rendering,mobile app and desktop app where there is no browser
    // 3)The dom api does not sanitize data.So,it is possible to injecta script XSS injections attack

    // Better way to manipulate DOM w/o accessing DOM elelembt directly
    // Renderer2 class-Allow manipulate dom w/o accessing dom element diretly.It provides a layer of abstractiob b/w Dom elements and compnent code

  
}