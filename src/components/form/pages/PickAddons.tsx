import {PageBox} from "../../PageBox/PageBox.tsx";
import {FormCheckboxGroup} from "../FormCheckboxGroup/FormCheckboxGroup.tsx";
import {IAddon} from "../../../global/types.ts";
import {FC} from "react";

type Props = { name: string, addons: IAddon[] }

export const PickAddons: FC<Props> = ({name, addons}) => (
    <PageBox headerText='Pick add-ons'
             descriptionText='Add-ons help enhance your gaming experience.'>

        <FormCheckboxGroup name={name} options={addons}/>

    </PageBox>
)