import { Component } from '@angular/core';
import { CustomNgIf } from '../CustomDirectives/custom-ng-if';

@Component({
  selector: 'app-creating-custom-attribute-directive',
  imports: [CustomNgIf],
  templateUrl: './creating-custom-attribute-directive.html',
  styleUrl: './creating-custom-attribute-directive.scss',
})
export class CreatingCustomAttributeDirective {}
