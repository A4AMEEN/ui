import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  standalone: false,
  
  templateUrl: './pricing-table.component.html',
  styleUrl: './pricing-table.component.css'
})
  export class PricingTableComponent {
  isAnnual = true;
  tiers: any[] = [
    {
      name: 'Starter',
      description: 'For individuals starting out with basic scheduling',
      price: 0,
      annualBilling: null,
      buttonText: 'Try for free',
      features: {
        tests: 1,
        teamMembers: 1
      },
      includedFeatures: [
        'Website security testing'
      ]
    },
    {
      name: 'Starter',
      description: 'For individuals starting out with basic scheduling',
      price: 41,
      annualBilling: 180,
      buttonText: 'Choose plan',
      features: {
        tests: 1,
        teamMembers: 1
      },
      includedFeatures: [
        'API security testing',
        'Website security testing',
        'CWE Top 25',
        'Authenticated testing',
        'Secure result sharing',
        'Security badge & certificate'
      ]
    },
    {
      name: 'Standard',
      description: 'For individuals starting out with basic scheduling',
      price: 83,
      annualBilling: 990,
      buttonText: 'Choose plan',
      features: {
        tests: 5,
        concurrentTests: 2,
        teamMembers: 5
      },
      includedFeatures: [
        'Scheduled tests',
        'API integration',
        'DevSecOps integration',
        'Uptime monitoring',
        'Scanned URL list'
      ]
    },
    {
      name: 'Professional',
      description: 'For individuals starting out with basic scheduling',
      price: 166,
      annualBilling: 1990,
      buttonText: 'Choose plan',
      features: {
        tests: 15,
        concurrentTests: 4,
        teamMembers: 5
      },
      includedFeatures: [
        'Scenario recording',
        'Pause and resume test'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For individuals starting out with basic scheduling',
      price: '?',
      annualBilling: null,
      buttonText: 'Contact sales',
      features: {
        tests: 5,
        concurrentTests: 2,
        teamMembers: 5
      },
      includedFeatures: [
        'SSO',
        'Priority support',
        'Dedicated CSM',
        'Conceirge onboarding services',
        'Cosmog',
        'Add-on professional services'
      ]
    }
  ];

  toggleBilling(): void {
    this.isAnnual = !this.isAnnual;
  }


}
