import {RadioLabelBox, StyledRadioInput} from "../LabelInputBox/LabelInputBox.styled.ts";
import {CheckMarkIcon} from "../icons/CheckMarkIcon.tsx";
import {CheckMarkBox} from "./CheckBoxInput.styled.ts";

interface ICheckboxInput {
    value: string;
    name: string;
    label: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    currency: string;
}

export const CheckboxInput = ({
                                  value,
                                  name,
                                  label,
                                  description,
                                  monthlyPrice,
                                  yearlyPrice,
                                  currency
                              }: ICheckboxInput) => {
    return (
        <>
            <StyledRadioInput className="visually-hidden" type="checkbox" id={value} name={name} value={value}/>
            <RadioLabelBox htmlFor={value}>
                <CheckMarkBox><CheckMarkIcon/></CheckMarkBox>
                <span>{label}</span>
                <p>{description}</p>
                <span>{`+${currency}${monthlyPrice}/mo`}</span>
            </RadioLabelBox>
        </>
    )
}
