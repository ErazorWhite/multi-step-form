import {RadioLabelBox, StyledRadioInput} from "../LabelInputBox/LabelInputBox.styled.ts";
import {CheckMarkIcon} from "../icons/CheckMarkIcon.tsx";
import {
    CheckmarkBox,
    CheckmarkBoxDescription,
    CheckmarkBoxLabel,
    CheckmarkBoxPrice
} from "./CheckBoxInput.styled.ts";
import {ChangeEventHandler, FocusEventHandler} from "react";

interface ICheckboxInput {
    value: string;
    name: string;
    label: string;
    description: string;
    price: number;
    isYearly: boolean;
    currency: string;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
}

export const CheckBoxInput = ({
                                  value,
                                  name,
                                  label,
                                  description,
                                  price,
                                  isYearly,
                                  currency,
                                  checked,
                                  onBlur,
                                  onChange
                              }: ICheckboxInput) => {
    return (
        <>
            <StyledRadioInput className="visually-hidden" type="checkbox" id={value} name={name} value={value}
                              checked={checked} onChange={onChange} onBlur={onBlur}/>
            <RadioLabelBox alignItems="center" htmlFor={value}>
                <CheckmarkBox>{checked && <CheckMarkIcon/>}</CheckmarkBox>
                <div>
                    <CheckmarkBoxLabel>{label}</CheckmarkBoxLabel>
                    <CheckmarkBoxDescription>{description}</CheckmarkBoxDescription>
                </div>
                <CheckmarkBoxPrice>{`+${currency}${price}/${isYearly ? 'yr' : 'mo'}`}</CheckmarkBoxPrice>
            </RadioLabelBox>
        </>
    )
}
