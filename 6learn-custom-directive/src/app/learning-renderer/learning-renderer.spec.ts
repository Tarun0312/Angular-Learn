import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningRenderer } from './learning-renderer';

describe('LearningRenderer', () => {
  let component: LearningRenderer;
  let fixture: ComponentFixture<LearningRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningRenderer],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningRenderer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
