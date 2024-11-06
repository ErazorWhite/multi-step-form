import {PageBox} from "../../PageBox/PageBox.tsx";
import {FormRadioGroup} from "../FormRadioGroup/FormRadioGroup.tsx";
import {IPlan} from "../../../global/types.ts";
import {FC} from "react";

interface ISelectPlanProps {
    name: string,
    plans: IPlan[]
}

export const SelectPlan: FC<ISelectPlanProps> = ({name, plans}) => (

    <PageBox headerText='Select your plan'
             descriptionText='You have the option of monthly or yearly billing.'>

        <FormRadioGroup name={name} plans={plans} hasYearlyTrigger/>

    </PageBox>
)