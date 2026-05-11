import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[setBackground]',
})
export class SetBackgroundDirective{

    // private element : ElementRef;
    constructor(private element:ElementRef){
        // this.element = element
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = 'red';
        this.element.nativeElement.style.color = 'yellow'
    }
}