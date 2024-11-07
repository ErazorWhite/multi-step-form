import { ReactNode } from 'react';
import { iconColors } from './data.ts';

export interface IAddon {
  label: string;
  value: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
}

export interface IPlan {
  label: string;
  value: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  color: iconColors;
  icon: ReactNode;
}

export interface IFormValues {
  name: string;
  email: string;
  phone: string;
  selectedPlan: string;
  isYearly: boolean;
  pickedAddons: string[];
}
