import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnNgIfWorking } from './learn-ng-if-working';

describe('LearnNgIfWorking', () => {
  let component: LearnNgIfWorking;
  let fixture: ComponentFixture<LearnNgIfWorking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnNgIfWorking],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnNgIfWorking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
