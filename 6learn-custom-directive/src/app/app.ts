import { Component, signal } from '@angular/core';
import { ModifyDomElementUsingElementRef } from './modify-dom-element-using-element-ref/modify-dom-element-using-element-ref';
import { LearningRenderer } from './learning-renderer/learning-renderer';
import { HiglightProduct } from './higlight-product/higlight-product';
import { LearnHostBinding } from './learn-host-binding/learn-host-binding';
import { DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener } from './diff-between-property-binding-vs-host-binding-and-eventbinding-vs-host-listener/diff-between-property-binding-vs-host-binding-and-eventbinding-vs-host-listener';
import { CustomPropertyBindingInDirective } from './custom-property-binding-in-directive/custom-property-binding-in-directive';
import { ConditionalDirective } from './conditional-directive/conditional-directive';
import { CreatingCustomClassDirective } from './creating-custom-class-directive/creating-custom-class-directive';
import { CreatingCustomStyleDirective } from './creating-custom-style-directive/creating-custom-style-directive';
import { LearnNgIfWorking } from './learn-ng-if-working/learn-ng-if-working';

@Component({
  selector: 'app-root',
  imports: [ModifyDomElementUsingElementRef,LearningRenderer,HiglightProduct,LearnHostBinding,DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener,CustomPropertyBindingInDirective,
    ConditionalDirective,CreatingCustomClassDirective,CreatingCustomStyleDirective,LearnNgIfWorking
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('6learn-custom-directive');
}
