import {IAddon} from "../pages/PickAddons.tsx";
import {CheckboxInput} from "../../CheckboxInput/CheckboxInput.tsx";
import {Li} from "../../../global/global.styled.ts";
import {useField} from "formik";

interface IFormCheckBoxGroup {
    name: string;
    options: IAddon[];
}

export const FormCheckboxGroup = ({name, options}: IFormCheckBoxGroup) => {
    const [field, meta] = useField(name)
    return (
        <ul>
            {options.map(({value, label, description, currency, monthlyPrice, yearlyPrice}) => (
                <Li key={value}>
                    <CheckboxInput name={name}
                                   label={label}
                                   value={value}
                                   description={description}
                                   currency={currency}
                                   monthlyPrice={monthlyPrice}
                                   yearlyPrice={yearlyPrice}/>
                </Li>
            ))}
        </ul>
    )
}
