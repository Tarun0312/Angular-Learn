import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener } from './diff-between-property-binding-vs-host-binding-and-eventbinding-vs-host-listener';

describe('DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener', () => {
  let component: DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener;
  let fixture: ComponentFixture<DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener],
    }).compileComponents();

    fixture = TestBed.createComponent(
      DiffBetweenPropertyBindingVsHostBindingAndEventbindingVsHostListener,
    );
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
