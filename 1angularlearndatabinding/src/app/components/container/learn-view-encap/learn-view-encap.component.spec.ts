import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnViewEncapComponent } from './learn-view-encap.component';

describe('LearnViewEncapComponent', () => {
  let component: LearnViewEncapComponent;
  let fixture: ComponentFixture<LearnViewEncapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnViewEncapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnViewEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
