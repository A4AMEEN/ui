import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingToggleComponent } from './pricing-toggle.component';

describe('PricingToggleComponent', () => {
  let component: PricingToggleComponent;
  let fixture: ComponentFixture<PricingToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
