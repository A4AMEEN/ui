import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-pricing-button',
  standalone: false,
  
  templateUrl: './pricing-button.component.html',
  styleUrl: './pricing-button.component.css'
})
export class PricingButtonComponent {
  @Input() buttonText: string = '';

  onClick() {
    // Add any button click handling logic here
    console.log(`${this.buttonText} button clicked`);
  }
}
