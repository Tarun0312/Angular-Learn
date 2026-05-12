import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalDirective } from './conditional-directive';

describe('ConditionalDirective', () => {
  let component: ConditionalDirective;
  let fixture: ComponentFixture<ConditionalDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
