import { PageBox } from '../../PageBox/PageBox.tsx';
import { useFormikContext } from 'formik';
import { IAddon, IPlan } from '../../../global/types.ts';
import { FC, useMemo } from 'react';
import { Summary } from '../../Summary/Summary.tsx';

interface IFinishingUpContextValues {
  isYearly: boolean;
  selectedPlan: string;
  pickedAddons: string[];
}

interface IFinishingUpProps {
  plans: IPlan[];
  addons: IAddon[];
  goTo: (i: number) => void;
}

export const FinishingUp: FC<IFinishingUpProps> = ({ plans, addons, goTo }) => {
  const {
    values: { isYearly, selectedPlan, pickedAddons },
  } = useFormikContext<IFinishingUpContextValues>();
  const selectedPlanDetails = useMemo(
    () => plans.find((plan) => plan.value === selectedPlan),
    [plans, selectedPlan]
  );
  const pickedAddonsDetails = useMemo(
    () => addons.filter((addon) => pickedAddons.includes(addon.value)),
    [addons, pickedAddons]
  );

  return (
    <PageBox
      headerText="Finishing up"
      descriptionText="Double-check everything looks OK before confirming."
    >
      <Summary
        isYearly={isYearly}
        plan={selectedPlanDetails}
        addons={pickedAddonsDetails}
        goTo={goTo}
      />
    </PageBox>
  );
};
