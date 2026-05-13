import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingCustomStyleDirective } from './creating-custom-style-directive';

describe('CreatingCustomStyleDirective', () => {
  let component: CreatingCustomStyleDirective;
  let fixture: ComponentFixture<CreatingCustomStyleDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingCustomStyleDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatingCustomStyleDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
