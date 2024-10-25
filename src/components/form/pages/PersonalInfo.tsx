import {PageBox} from "../../PageBox/PageBox.tsx";
import {FormInput} from "../FormInput/FormInput.tsx";
export const PersonalInfo = () => (
    <PageBox headerText='Personal info'
             descriptionText='Please provide your name, email address, and phone number.'>
        <FormInput label="Name" name="name" placeholder="e.g. Stephen King"/>
        <FormInput label="Email Address" name="email" placeholder="e.g. stephenking@lorem.com"/>
        <FormInput label="Phone Number" name="phone" placeholder="e.g. +1 234 567 890"/>

    </PageBox>
)