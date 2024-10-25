import {ArcadeIcon} from "../../icons/ArcadeIcon.tsx";
import {AdvancedIcon} from "../../icons/AdvancedIcon.tsx";
import {ProIcon} from "../../icons/ProIcon.tsx";
import {RadioIconThumb} from "./FormRadioGroup.styled.ts";

export const FormRadioGroup = () => {
    return (

        <ul>
            <li>
                <RadioIconThumb backgroundColor="orange">
                    <ArcadeIcon/>
                </RadioIconThumb>
                <input id="arcade" value="arcade" type="radio" name="plan"/>
                <label htmlFor="arcade">Arcade</label>
            </li>
            <li>
                <RadioIconThumb backgroundColor="pink">
                    <AdvancedIcon/>
                </RadioIconThumb>
                <input id="advanced" value="advanced" type="radio" name="plan"/>
                <label htmlFor="advanced">Advanced</label>
            </li>
            <li>
                <RadioIconThumb backgroundColor="purple">
                    <ProIcon/>
                </RadioIconThumb>
                <input id="pro" value="pro" type="radio" name="plan"/>
                <label htmlFor="pro">Pro</label>
            </li>
        </ul>
    )
}
