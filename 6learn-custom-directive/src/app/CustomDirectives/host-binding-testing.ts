import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBindingTesting]',
})
export class HostBindingTesting {
  constructor() {}

  @HostBinding('attr.value') 
  inputVal = "Host Binding"

  @HostListener('focus')
  onFocus(){
       console.log("Input has been focused from directive class"); 
  }
  
}
