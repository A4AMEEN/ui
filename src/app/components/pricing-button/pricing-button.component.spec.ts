import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingButtonComponent } from './pricing-button.component';

describe('PricingButtonComponent', () => {
  let component: PricingButtonComponent;
  let fixture: ComponentFixture<PricingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
