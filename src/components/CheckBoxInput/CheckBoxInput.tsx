import { LabelBox, StyledInput } from '../LabelInputBox/LabelInputBox.styled.ts';
import { CheckmarkIcon } from '../icons/CheckmarkIcon.tsx';
import {
  CheckmarkBox,
  CheckmarkBoxDescription,
  CheckmarkBoxLabel,
  CheckmarkBoxPrice,
} from './CheckBoxInput.styled.ts';
import { ChangeEventHandler, FC, FocusEventHandler } from 'react';

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

export const CheckBoxInput: FC<ICheckboxInput> = ({
  value,
  name,
  label,
  description,
  price,
  isYearly,
  currency,
  checked,
  onBlur,
  onChange,
}) => {
  return (
    <>
      <StyledInput
        className="visually-hidden"
        type="checkbox"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
      />
      <LabelBox alignItems="center" htmlFor={value}>
        <CheckmarkBox>{checked && <CheckmarkIcon />}</CheckmarkBox>
        <div>
          <CheckmarkBoxLabel>{label}</CheckmarkBoxLabel>
          <CheckmarkBoxDescription>{description}</CheckmarkBoxDescription>
        </div>
        <CheckmarkBoxPrice>{`+${currency}${price}/${isYearly ? 'yr' : 'mo'}`}</CheckmarkBoxPrice>
      </LabelBox>
    </>
  );
};
