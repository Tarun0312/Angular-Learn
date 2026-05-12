import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertyBindingInDirective } from './custom-property-binding-in-directive';

describe('CustomPropertyBindingInDirective', () => {
  let component: CustomPropertyBindingInDirective;
  let fixture: ComponentFixture<CustomPropertyBindingInDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPropertyBindingInDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomPropertyBindingInDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
