import { Component, ViewEncapsulation } from '@angular/core';
import { Child2 } from './child2/child2';
import { Child1 } from './child1/child1';

@Component({
  selector: 'app-parent-component',
  imports: [Child2,Child1],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.scss',
  encapsulation:ViewEncapsulation.None
})
export class ParentComponent {}
