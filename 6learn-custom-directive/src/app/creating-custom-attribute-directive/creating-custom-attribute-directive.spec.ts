import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingCustomAttributeDirective } from './creating-custom-attribute-directive';

describe('CreatingCustomAttributeDirective', () => {
  let component: CreatingCustomAttributeDirective;
  let fixture: ComponentFixture<CreatingCustomAttributeDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingCustomAttributeDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatingCustomAttributeDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
