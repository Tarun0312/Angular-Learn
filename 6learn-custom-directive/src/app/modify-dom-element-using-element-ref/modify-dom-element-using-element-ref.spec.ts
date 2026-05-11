import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDomElementUsingElementRef } from './modify-dom-element-using-element-ref';

describe('ModifyDomElementUsingElementRef', () => {
  let component: ModifyDomElementUsingElementRef;
  let fixture: ComponentFixture<ModifyDomElementUsingElementRef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyDomElementUsingElementRef],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyDomElementUsingElementRef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
