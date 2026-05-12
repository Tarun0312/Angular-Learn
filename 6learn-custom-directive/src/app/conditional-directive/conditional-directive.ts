import { Component } from '@angular/core';
import { ConditionallyWork } from '../CustomDirectives/conditionally-work';

@Component({
  selector: 'app-conditional-directive',
  imports: [ConditionallyWork],
  templateUrl: './conditional-directive.html',
  styleUrl: './conditional-directive.scss',
})
export class ConditionalDirective {

}
