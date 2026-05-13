import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseLearn } from './switch-case-learn';

describe('SwitchCaseLearn', () => {
  let component: SwitchCaseLearn;
  let fixture: ComponentFixture<SwitchCaseLearn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCaseLearn],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchCaseLearn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
