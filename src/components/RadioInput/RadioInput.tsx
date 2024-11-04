import {ExtraDetails, Label, Price, RadioIconBox} from "./RadioInput.styled.ts";
import {ChangeEventHandler, FocusEventHandler, ReactNode} from "react";
import {LabelBox, StyledInput} from "../LabelInputBox/LabelInputBox.styled.ts";

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
            <StyledInput className="visually-hidden"
                         id={value}
                         value={value}
                         type="radio"
                         name={name}
                         checked={checked}
                         onChange={onChange}
                         onBlur={onBlur}
            />
            <LabelBox htmlFor={value} alignItems="flex-start" flexDirection="column">
                <RadioIconBox backgroundColor={color}>
                    {icon}
                </RadioIconBox>
                <div>
                    <Label>{label}</Label>
                    <Price>{`${currency}${price}/${isYearly ? 'yr' : 'mo'}`}</Price>
                    {isYearly && <ExtraDetails>2 months free</ExtraDetails>}
                </div>
            </LabelBox>
        </>
    )
}
