import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSampleDir]'
})
export class SampleDirDirective {

  // sample directive to understand diff. b/w Property binding and @HostBinding
  // diff b/w event binding and @HostBinding
  // simply property binding and event binding are used in case of components in case of input and output event respectively
  // HostBinding and HostListener are used in case of directives in case of input and output event respectively

  @HostBinding('value')
  inputVal1 : string="India is my country";

  constructor() { }
  @HostListener('focus')
  onFocus(){
    console.log('focus directive');

    
  }
}
