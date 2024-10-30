import {IAddon} from "../pages/PickAddons.tsx";
import {CheckBoxInput} from "../../CheckBoxInput/CheckBoxInput.tsx";
import {Li} from "../../../global/global.styled.ts";
import {useFormikContext} from "formik";
import {FORM_FIELD_NAMES} from "../../../global/сonstants.ts";
import {useMemo} from "react";

interface IFormCheckBoxGroupProps {
    name: string;
    options: IAddon[];
}

interface IPickedAddonDetails {
    value: string;
    price: number;
}

interface IFormCheckBoxContextValues {
    isYearly: boolean;
    selectedAddons: IPickedAddonDetails[]
}

export const FormCheckboxGroup = ({name, options}: IFormCheckBoxGroupProps) => {
    const {values, setFieldValue} = useFormikContext<IFormCheckBoxContextValues>();
    const {selectedAddons, isYearly} = values;

    const selectedAddonValues = useMemo(
        () => new Set(selectedAddons.map((addon) => addon.value)),
        [selectedAddons]
    );

    const handleAddonChange = async (addon: IPickedAddonDetails) => {
        const isSelected = selectedAddonValues.has(addon.value);
        const newSelectedAddons = isSelected
            ? selectedAddons.filter(selectedAddon => selectedAddon.value !== addon.value)
            : [...selectedAddons, addon];
        await setFieldValue(FORM_FIELD_NAMES.SELECTED_ADDONS, newSelectedAddons);
    };

    return (
        <ul>
            {options.map(({value, label, description, currency, monthlyPrice, yearlyPrice}) => (
                <Li key={value}>
                    <CheckBoxInput name={name}
                                   label={label}
                                   value={value}
                                   description={description}
                                   currency={currency}
                                   price={isYearly ? yearlyPrice : monthlyPrice}
                                   isYearly={isYearly}
                                   checked={selectedAddonValues.has(value)}
                                   onChange={() =>
                                       handleAddonChange({
                                           value,
                                           price: isYearly ? yearlyPrice : monthlyPrice,
                                       })
                                   }
                    />
                </Li>
            ))}
        </ul>
    )
}
