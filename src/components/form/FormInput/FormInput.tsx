import {useField} from "formik";
import {FormInputLabel, FormInputField} from "./FormInput.styled.ts";
import {ChangeEvent} from "react";

interface IFormInput {
    label: string,
    name: string,
    placeholder?: string,
    type?: string,
    maxLength?: number,
    maskFunction?: (value: string) => string,
}

export const FormInput = ({label, placeholder, maskFunction, ...props}: IFormInput) => {
    const [field, meta, helpers] = useField(props.name)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        if (maskFunction) {
            value = maskFunction(value);
        }

        void helpers.setValue(value);
    };

    return (
        <>
            <FormInputLabel htmlFor={field.name}>{label}</FormInputLabel>
            <FormInputField id={field.name} type="text" placeholder={placeholder}
                            {...field} {...props}
                            onChange={handleChange}/>
            {meta.touched && meta.error &&
                <div className="error">{meta.error}</div>}
        </>
    )
}
