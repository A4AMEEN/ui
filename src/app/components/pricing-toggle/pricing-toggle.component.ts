import { Component,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-billing-toggle',
  standalone: false,
  
  templateUrl: './pricing-toggle.component.html',
  styleUrl: './pricing-toggle.component.css'
})
export class PricingToggleComponent {
  @Input() isAnnual: boolean = false;
  @Output() isAnnualChange = new EventEmitter<boolean>();

  onToggle() {
    this.isAnnualChange.emit(!this.isAnnual);
  }
}
