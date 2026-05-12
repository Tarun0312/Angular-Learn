import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingCustomClassDirective } from './creating-custom-class-directive';

describe('CreatingCustomClassDirective', () => {
  let component: CreatingCustomClassDirective;
  let fixture: ComponentFixture<CreatingCustomClassDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatingCustomClassDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatingCustomClassDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
