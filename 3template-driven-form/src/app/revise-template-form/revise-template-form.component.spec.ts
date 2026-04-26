import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseTemplateFormComponent } from './revise-template-form.component';

describe('ReviseTemplateFormComponent', () => {
  let component: ReviseTemplateFormComponent;
  let fixture: ComponentFixture<ReviseTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviseTemplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviseTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
