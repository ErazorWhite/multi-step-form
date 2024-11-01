import {useField, useFormikContext} from "formik";
import {RadioInput} from "../../RadioInput/RadioInput.tsx";
import {useCallback} from "react";
import {ToggleSwitch} from "../../ToggleSwitch/ToggleSwitch.tsx";
import {Li} from "../../../global/global.styled.ts";
import {FORM_FIELD_NAMES} from "../../../global/сonstants.ts";
import {IPlan} from "../../../global/types.ts";
import {Ul} from "./FormRadioGroup.styled.ts";

interface IFormRadioGroupProps {
    name: string;
    plans: IPlan[],
    hasYearlyTrigger?: boolean,
}

interface IFormRadioContextValues {
    isYearly: boolean;
}


export const FormRadioGroup = ({name, plans, hasYearlyTrigger = false}: IFormRadioGroupProps) => {
    const [field, meta] = useField(name);
    const {values: {isYearly}, setFieldValue} = useFormikContext<IFormRadioContextValues>();

    const toggleIsYearly = useCallback( () => {
        void setFieldValue(FORM_FIELD_NAMES.IS_YEARLY, !isYearly);
    }, [setFieldValue, isYearly])

    return (
        <>
            <Ul>
                {plans.map(({value, label, color, yearlyPrice, monthlyPrice, currency, icon}: IPlan) => (
                    <Li key={value} lastMargin={24}>
                        <RadioInput name={name}
                                    label={label}
                                    value={value}
                                    color={color}
                                    price={isYearly ? yearlyPrice : monthlyPrice}
                                    currency={currency}
                                    isYearly={isYearly}
                                    icon={icon}
                                    checked={field?.value === value}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                        />
                    </Li>
                ))
                }
            </Ul>
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}

            {hasYearlyTrigger &&
                <ToggleSwitch isChecked={isYearly} onToggle={toggleIsYearly}/>
            }
        </>
    )
}