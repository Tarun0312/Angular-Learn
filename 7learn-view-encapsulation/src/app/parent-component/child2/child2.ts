import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.html',
  styleUrl: './child2.scss',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class Child2 {}
