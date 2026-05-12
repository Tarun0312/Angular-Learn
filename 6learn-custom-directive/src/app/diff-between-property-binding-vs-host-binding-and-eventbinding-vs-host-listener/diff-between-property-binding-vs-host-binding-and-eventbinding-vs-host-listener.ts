import { Component, inputBinding } from '@angular/core';
import { HostBindingTesting } from '../CustomDirectives/host-binding-testing';

@Component({
  selector: 'app-diff-between-property-binding-vs-host-binding-and-eventbinding-vs-host-listener',
  imports: [HostBindingTesting],
  templateUrl:
    './diff-between-property-binding-vs-host-binding-and-eventbinding-vs-host-listener.html',
  styleUrl:
    './diff-between-property-binding-vs-host-binding-and-eventbinding-vs-host-listener.scss',
})
export class DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener {
  inputValue : string = 'Property Binding'

  onFocus(){
    console.log("Input has been focused from component class");
  }
}
