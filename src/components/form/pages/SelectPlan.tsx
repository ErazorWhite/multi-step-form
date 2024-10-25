import {PageBox} from "../../PageBox/PageBox.tsx";
import {FormRadioGroup} from "../FormRadioGroup/FormRadioGroup.tsx";

export const SelectPlan = () => (

    <PageBox headerText='Select your plan'
             descriptionText='You have the option of monthly or yearly billing.'>

        <FormRadioGroup/>

    </PageBox>
)