import {PageBox} from "../../PageBox/PageBox.tsx";

export const PickAddons = () => (
    <PageBox headerText='Pick add-ons'
             descriptionText='Add-ons help enhance your gaming experience.'>

        <input type="checkbox" id="service" name="addons" value="service"/>
        <label htmlFor="service">Online service</label>

        <input type="checkbox" id="storage" name="addons" value="storage"/>
        <label htmlFor="storage">Larger storage</label>

        <input type="checkbox" id="profile" name="addons" value="profile"/>
        <label htmlFor="profile">Customizable profile</label>

    </PageBox>
)