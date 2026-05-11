import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiglightProduct } from './higlight-product';

describe('HiglightProduct', () => {
  let component: HiglightProduct;
  let fixture: ComponentFixture<HiglightProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiglightProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(HiglightProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
