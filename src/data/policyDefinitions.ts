import { PolicyOption } from '../types';

export const policyOptions: PolicyOption[] = [
  {
    id: 'vaccination',
    name: 'Mass Vaccination Program',
    description: `Launch an immediate vaccination program.
Vaccination rate: 1% of population per day.
Cost: $20 per person vaccinated.
Effective after: 100 days`,
    economicImpact: 0,
    contactReduction: 0,
    socialCost: 0,
    implementationDelay: 100,
    dailyCostPerPerson: 0,
    oneTime: true
  },
  {
    id: 'lockdown',
    name: 'Full Lockdown',
    description: `Implement a complete lockdown of non-essential activities.
Reduces daily contacts by 95%.
Cost: $100 per person per day.
High economic and social costs.
Effective immediately.`,
    economicImpact: 0,
    contactReduction: 0.95,
    socialCost: 0,
    implementationDelay: 10,
    dailyCostPerPerson: 100,
    oneTime: false
  },
  {
    id: 'masks',
    name: 'Mandatory Mask Wearing',
    description: `Require masks in all public spaces.
Reduces transmission probability by 50%.
Cost: $5 per person per day.
Moderate social cost.
Effective immediately.`,
    economicImpact: 0,
    transmissionReduction: 0.3,
    socialCost: 0,
    implementationDelay: 3,
    dailyCostPerPerson: 3,
    oneTime: false
  },
  {
    id: 'rapid_containment',
    name: 'Rapid Detection & Containment',
    description: `Implement aggressive testing and isolation.
Reduces infectious contacts by 80%.
Identifies and isolates 50% of exposed cases.
Cost: $200 per active case per day.
Plus $5 per person per day for surveillance.
Moderate social cost.
Effective after: 5 days`,
    economicImpact: 0,
    contactReduction: 0.8,
    exposedDetectionRate: 0.5,
    socialCost: 0,
    implementationDelay: 5,
    dailyCostPerPerson: 5,
    dailyCostPerCase: 200,
    oneTime: false
  }
];