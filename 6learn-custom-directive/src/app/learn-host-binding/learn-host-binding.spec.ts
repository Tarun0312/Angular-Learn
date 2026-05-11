import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnHostBinding } from './learn-host-binding';

describe('LearnHostBinding', () => {
  let component: LearnHostBinding;
  let fixture: ComponentFixture<LearnHostBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnHostBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnHostBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
