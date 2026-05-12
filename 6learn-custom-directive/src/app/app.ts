import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModifyDomElementUsingElementRef } from './modify-dom-element-using-element-ref/modify-dom-element-using-element-ref';
import { LearningRenderer } from './learning-renderer/learning-renderer';
import { HiglightProduct } from './higlight-product/higlight-product';
import { LearnHostBinding } from './learn-host-binding/learn-host-binding';
import { DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener } from './diff-between-property-binding-vs-host-binding-and-eventbinding-vs-host-listener/diff-between-property-binding-vs-host-binding-and-eventbinding-vs-host-listener';

@Component({
  selector: 'app-root',
  imports: [ModifyDomElementUsingElementRef,LearningRenderer,HiglightProduct,LearnHostBinding,DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('6learn-custom-directive');
}
