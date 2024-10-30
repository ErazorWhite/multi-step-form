import {useField, useFormikContext} from "formik";
import {RadioInput} from "../../RadioInput/RadioInput.tsx";
import {IPlanOption} from "../pages/SelectPlan.tsx";
import {ChangeEvent, useCallback} from "react";
import {ToggleSwitch} from "../../ToggleSwitch/ToggleSwitch.tsx";
import {Li} from "../../../global/global.styled.ts";
import {FORM_FIELD_NAMES} from "../../../global/сonstants.ts";

interface IFormRadioGroupProps {
    name: string,
    options: IPlanOption[],
    hasYearlyTrigger?: boolean,
}

interface IFormRadioContextValues {
    isYearly: boolean;
    plan: string;
    price: number;
}


export const FormRadioGroup = ({name, options, hasYearlyTrigger = false}: IFormRadioGroupProps) => {
    const [field, meta] = useField(name);
    const {values, setFieldValue} = useFormikContext<IFormRadioContextValues>();
    console.log(values)
    const {isYearly, plan} = values;

    const setNewPrice = useCallback(async (value: string, isYearly: boolean) => {
        const selectedPlan = options.find(option => option.value === value);
        if (selectedPlan) {
            const newPrice = isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice;
            await setFieldValue(FORM_FIELD_NAMES.PLAN_PRICE, newPrice)
        }
    }, [options, setFieldValue])

    const toggleIsYearly = useCallback(async () => {
        const newIsYearly = !isYearly
        await setFieldValue(FORM_FIELD_NAMES.IS_YEARLY, newIsYearly);
        if (plan)
            await setNewPrice(plan, newIsYearly);
    }, [isYearly, setFieldValue, plan, setNewPrice]);

    const handlePlanChange = useCallback(async (event: ChangeEvent<HTMLInputElement>) => {
        field.onChange(event);
        await setNewPrice(event.target.value, isYearly);
    }, [field, setNewPrice, isYearly]);

    return (
        <>
            <ul>
                {options.map(({
                                  label,
                                  value,
                                  color,
                                  monthlyPrice,
                                  yearlyPrice,
                                  currency,
                                  icon
                              }: IPlanOption) => (
                    <Li key={value}>
                        <RadioInput name={field.name}
                                    label={label}
                                    value={value}
                                    color={color}
                                    price={isYearly ? yearlyPrice : monthlyPrice}
                                    currency={currency}
                                    isYearly={isYearly}
                                    icon={icon}
                                    checked={field.value === value}
                                    onChange={handlePlanChange}
                                    onBlur={field.onBlur}/>
                    </Li>
                ))
                }
            </ul>
            {meta.touched && meta.error ? (
                <div>{meta.error}</div>
            ) : null}

            {hasYearlyTrigger &&
                <ToggleSwitch isChecked={isYearly} onToggle={toggleIsYearly}/>
            }
        </>
    )
}