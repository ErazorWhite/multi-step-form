import { CheckBoxInput } from '../../CheckBoxInput/CheckBoxInput.tsx';
import { useField, useFormikContext } from 'formik';
import { IAddon } from '../../../global/types.ts';
import { Li } from '../../../global/global.styled.ts';
import { Ul } from './FormCheckboxGroup.styled.ts';
import { FC } from 'react';

interface IFormCheckBoxGroupProps {
  name: string;
  options: IAddon[];
}

interface IFormCheckBoxContextValues {
  isYearly: boolean;
}

export const FormCheckboxGroup: FC<IFormCheckBoxGroupProps> = ({ name, options }) => {
  const [field] = useField(name);
  const {
    values: { isYearly },
  } = useFormikContext<IFormCheckBoxContextValues>();

  return (
    <Ul>
      {options.map(({ label, value, description, currency, yearlyPrice, monthlyPrice }) => (
        <Li key={value}>
          <CheckBoxInput
            name={name}
            label={label}
            value={value}
            description={description}
            currency={currency}
            price={isYearly ? yearlyPrice : monthlyPrice}
            isYearly={isYearly}
            checked={field.value?.includes(value)}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        </Li>
      ))}
    </Ul>
  );
};
