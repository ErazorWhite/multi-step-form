import {PageBox} from "../../PageBox/PageBox.tsx";
import {FormCheckboxGroup} from "../FormCheckboxGroup/FormCheckboxGroup.tsx";
import {FORM_FIELD_NAMES} from "../../../global/сonstants.ts";

export interface IAddon {
    label: string;
    value: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    currency: string;
}

const addons: IAddon[] = [
    {
        label: "Online service",
        description: "Access to multiplayer games",
        value: "service",
        monthlyPrice: 1,
        yearlyPrice: 10,
        currency: "$"
    },
    {
        label: "Larger storage",
        description: "Extra 1TB of cloud save",
        value: "storage",
        monthlyPrice: 2,
        yearlyPrice: 20,
        currency: "$"
    },
    {
        label: "Customizable profile",
        description: "Custom theme on your profile",
        value: "profile",
        monthlyPrice: 2,
        yearlyPrice: 20,
        currency: "$"
    },
]

export const PickAddons = () => (
    <PageBox headerText='Pick add-ons'
             descriptionText='Add-ons help enhance your gaming experience.'>

        <FormCheckboxGroup name={FORM_FIELD_NAMES.SELECTED_ADDONS} options={addons}/>

    </PageBox>
)