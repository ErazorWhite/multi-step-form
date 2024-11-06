import { IAddon, IPlan } from './types.ts';
import { ArcadeIcon } from '../components/icons/ArcadeIcon.tsx';
import { AdvancedIcon } from '../components/icons/AdvancedIcon.tsx';
import { ProIcon } from '../components/icons/ProIcon.tsx';

export enum iconColors {
  ORANGE = 'orange',
  PINK = 'pink',
  PURPLE = 'purple',
}

const currency = '$';

export const plans: IPlan[] = [
  {
    label: 'Arcade',
    value: 'arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    currency: currency,
    color: iconColors.ORANGE,
    icon: ArcadeIcon(),
  },
  {
    label: 'Advanced',
    value: 'advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    currency: currency,
    color: iconColors.PINK,
    icon: AdvancedIcon(),
  },
  {
    label: 'Pro',
    value: 'pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    currency: currency,
    color: iconColors.PURPLE,
    icon: ProIcon(),
  },
];

export const addons: IAddon[] = [
  {
    label: 'Online service',
    description: 'Access to multiplayer games',
    value: 'service',
    monthlyPrice: 1,
    yearlyPrice: 10,
    currency: currency,
  },
  {
    label: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    value: 'storage',
    monthlyPrice: 2,
    yearlyPrice: 20,
    currency: currency,
  },
  {
    label: 'Customizable profile',
    description: 'Custom theme on your profile',
    value: 'profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
    currency: currency,
  },
];

export const navPages = ['YOUR INFO', 'SELECT PLAN', 'ADD-ONS', 'SUMMARY'];
