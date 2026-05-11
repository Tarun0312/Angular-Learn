import { Component } from '@angular/core';
import { SetBackgroundDirective } from '../CustomDirectives/SetBackground.directive';

@Component({
  selector: 'app-modify-dom-element-using-element-ref',
  imports: [SetBackgroundDirective],
  templateUrl: './modify-dom-element-using-element-ref.html',
  styleUrl: './modify-dom-element-using-element-ref.scss',
})
export class ModifyDomElementUsingElementRef {}
