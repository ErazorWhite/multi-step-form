import {useField} from "formik";
import {IRadioInput, RadioInput} from "../../RadioInput/RadioInput.tsx";
import {useState} from "react";

type radioOptionType = Pick<IRadioInput, 'label' | 'value' | 'color' | 'price' | 'icon'>;

const YEARLY_MULTIPLIER = 10;

interface IFormRadioGroupProps {
    name: string,
    options: radioOptionType[],
    hasYearlyTrigger?: boolean,
}

export const FormRadioGroup = ({name, options, hasYearlyTrigger = false}: IFormRadioGroupProps) => {
    const [field, meta] = useField(name);
    const [isYearly, setIsYearly] = useState(false);

    return (
        <>
            <ul>
                {options.map(({
                                  label,
                                  value,
                                  color,
                                  price,
                                  icon
                              }: radioOptionType) => (
                    <li key={value}>
                        <RadioInput name={field.name}
                                    label={label}
                                    value={value}
                                    color={color}
                                    price={isYearly ? price * YEARLY_MULTIPLIER : price}
                                    icon={icon}
                                    checked={field.value === value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}/>
                    </li>
                ))
                }
            </ul>
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}

            {hasYearlyTrigger && <div>
                <button type="button" onClick={() => {
                    setIsYearly(!isYearly);
                }}>
                    Monthly TRIGGER Yearly
                    {` (${isYearly})`}
                </button>
            </div>}
        </>
    )
}