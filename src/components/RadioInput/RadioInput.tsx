import {ExtraDetails, Price, RadioIconBox} from "./RadioInput.styled.ts";
import {ChangeEventHandler, FocusEventHandler, ReactNode} from "react";
import {RadioLabelBox, StyledRadioInput} from "../LabelInputBox/LabelInputBox.styled.ts";

export interface IRadioInput {
    name: string;
    label: string;
    value: string;
    color: string;
    price: number;
    currency: string;
    isYearly: boolean;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    icon?: ReactNode;
}

export const RadioInput = ({
                               label,
                               name,
                               value,
                               color,
                               price,
                               currency,
                               isYearly,
                               icon,
                               checked,
                               onChange,
                               onBlur
                           }: IRadioInput) => {
    return (
        <>
            <StyledRadioInput className="visually-hidden"
                              id={value}
                              value={value}
                              type="radio"
                              name={name}
                              checked={checked}
                              onChange={onChange}
                              onBlur={onBlur}
            />
            <RadioLabelBox htmlFor={value} alignItems="flex-start">
                <RadioIconBox backgroundColor={color}>
                    {icon}
                </RadioIconBox>
                <div>
                    {label}
                    <Price>{`${currency}${price}/${isYearly ? 'yr' : 'mo'}`}</Price>
                    {isYearly && <ExtraDetails>2 months free</ExtraDetails>}
                </div>
            </RadioLabelBox>
        </>
    )
}
