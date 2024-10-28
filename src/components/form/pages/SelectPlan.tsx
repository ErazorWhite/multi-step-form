import {PageBox} from "../../PageBox/PageBox.tsx";
import {ArcadeIcon} from "../../icons/ArcadeIcon.tsx";
import {AdvancedIcon} from "../../icons/AdvancedIcon.tsx";
import {ProIcon} from "../../icons/ProIcon.tsx";
import {FormRadioGroup} from "../FormRadioGroup/FormRadioGroup.tsx";
import {ReactNode} from "react";


enum iconColors {
    ORANGE = "orange",
    PINK = "pink",
    PURPLE = "purple",
}

interface IPlanOption {
    label: string;
    value: string;
    price: number;
    color: iconColors;
    icon: ReactNode;
}

const planOptions: IPlanOption[] = [
    {label: "Arcade", value: "arcade", price: 9, color: iconColors.ORANGE, icon: <ArcadeIcon/>},
    {label: "Advanced", value: "advanced", price: 12, color: iconColors.PINK, icon: <AdvancedIcon/>},
    {label: "Pro", value: "pro", price: 15, color: iconColors.PURPLE, icon: <ProIcon/>},
]

export const SelectPlan = () => (

    <PageBox headerText='Select your plan'
             descriptionText='You have the option of monthly or yearly billing.'>

        <FormRadioGroup name="plan" options={planOptions} hasYearlyTrigger={true}/>

    </PageBox>
)