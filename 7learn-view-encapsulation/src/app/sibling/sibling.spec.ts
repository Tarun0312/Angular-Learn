import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibling } from './sibling';

describe('Sibling', () => {
  let component: Sibling;
  let fixture: ComponentFixture<Sibling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sibling],
    }).compileComponents();

    fixture = TestBed.createComponent(Sibling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
