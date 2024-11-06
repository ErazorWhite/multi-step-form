import { FC, useCallback } from 'react';
import { IAddon, IPlan } from '../../global/types.ts';
import {
  SummaryAddonDetails,
  SummaryAddonLabel,
  SummaryChangeButton,
  SummaryContainer,
  SummarySelectedPlanDetails,
  SummaryPlanPrice,
  SummarySelectedPlanLabel,
  SummaryTotalDetails,
  SummaryTotalLabel,
  SummaryTotalPrice,
} from './Summary.styled.ts';

interface ISummaryProps {
  plan?: IPlan;
  addons: IAddon[];
  isYearly: boolean;
  goTo: (i: number) => void;
}

export const Summary: FC<ISummaryProps> = ({ plan, addons, isYearly, goTo }) => {
  const calculateTotalPrice = useCallback(() => {
    if (!plan) return 0;
    const planPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const addonsPrice = addons.reduce(
      (acc, addon) => acc + (isYearly ? addon.yearlyPrice : addon.monthlyPrice),
      0
    );
    return planPrice + addonsPrice;
  }, [isYearly, plan, addons]);

  const formatPrice = (price: number, currency: string) =>
    `${currency}${price}/${isYearly ? 'yr' : 'mo'}`;

  return (
    <>
      <SummaryContainer>
        <SummarySelectedPlanDetails>
          <div>
            <SummarySelectedPlanLabel>
              {plan?.label} ({isYearly ? 'Yearly' : 'Monthly'})
            </SummarySelectedPlanLabel>
            <SummaryChangeButton
              type="button"
              onClick={() => {
                goTo(1); // Magic number :(
              }}
            >
              Change
            </SummaryChangeButton>
          </div>
          <SummaryPlanPrice>
            {plan && formatPrice(isYearly ? plan?.yearlyPrice : plan?.monthlyPrice, plan?.currency)}
          </SummaryPlanPrice>
        </SummarySelectedPlanDetails>
        <ul>
          {addons.map((addon) => (
            <SummaryAddonDetails key={addon.value}>
              <SummaryAddonLabel>{addon.label}</SummaryAddonLabel>
              <span>
                +{formatPrice(isYearly ? addon.yearlyPrice : addon.monthlyPrice, addon.currency)}
              </span>
            </SummaryAddonDetails>
          ))}
        </ul>
      </SummaryContainer>

      <SummaryTotalDetails>
        <SummaryTotalLabel>Total (per {isYearly ? 'year' : 'month'})</SummaryTotalLabel>
        <SummaryTotalPrice>+{formatPrice(calculateTotalPrice(), '$')}</SummaryTotalPrice>
      </SummaryTotalDetails>
    </>
  );
};
