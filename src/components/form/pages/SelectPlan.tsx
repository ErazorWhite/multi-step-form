import {PageBox} from "../../PageBox/PageBox.tsx";
import {ArcadeIcon} from "../../icons/ArcadeIcon.tsx";
import {AdvancedIcon} from "../../icons/AdvancedIcon.tsx";
import {ProIcon} from "../../icons/ProIcon.tsx";
import {FormRadioGroup} from "../FormRadioGroup/FormRadioGroup.tsx";
import {ReactNode} from "react";
import {FORM_FIELD_NAMES} from "../../../global/сonstants.ts";


enum iconColors {
    ORANGE = "orange",
    PINK = "pink",
    PURPLE = "purple",
}

export interface IPlanOption {
    label: string;
    value: string;
    monthlyPrice: number;
    yearlyPrice: number;
    currency: string;
    color: iconColors;
    icon: ReactNode;
}

const planOptions: IPlanOption[] = [
    {label: "Arcade", value: "arcade", monthlyPrice: 9, yearlyPrice: 90, currency: "$", color: iconColors.ORANGE, icon: <ArcadeIcon/>},
    {label: "Advanced", value: "advanced", monthlyPrice: 12, yearlyPrice: 120, currency: "$",  color: iconColors.PINK, icon: <AdvancedIcon/>},
    {label: "Pro", value: "pro", monthlyPrice: 15, yearlyPrice: 150 ,currency: "$",  color: iconColors.PURPLE, icon: <ProIcon/>},
]

export const SelectPlan = () => (

    <PageBox headerText='Select your plan'
             descriptionText='You have the option of monthly or yearly billing.'>

        <FormRadioGroup name={FORM_FIELD_NAMES.SELECTED_PLAN} options={planOptions} hasYearlyTrigger/>

    </PageBox>
)