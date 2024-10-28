import {Price, RadioIconBox, RadioLabelBox, StyledRadioInput} from "./RadioInput.styled.ts";
import {ChangeEventHandler, FocusEventHandler, ReactNode} from "react";


export interface IRadioInput {
    name: string;
    label: string;
    value: string;
    color: string;
    price: number;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    icon?: ReactNode;
}

export const RadioInput = ({label, name, value, color, price, icon, checked, onChange, onBlur}: IRadioInput) => {
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
            <RadioLabelBox htmlFor={value}>
                <RadioIconBox backgroundColor={color}>
                    {icon}
                </RadioIconBox>
                <div>
                    {label}
                    <Price>${price}/mo</Price>
                </div>
            </RadioLabelBox>
        </>

    )
}
