import { Component } from '@angular/core';
import { CustomPropertyBindingDirective } from '../CustomDirectives/custom-property-binding-directive';

@Component({
  selector: 'app-custom-property-binding-in-directive',
  imports: [CustomPropertyBindingDirective],
  templateUrl: './custom-property-binding-in-directive.html',
  styleUrl: './custom-property-binding-in-directive.scss',
})
export class CustomPropertyBindingInDirective {

  
}
