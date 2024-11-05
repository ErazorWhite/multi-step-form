import {useField} from "formik";
import {FormInputLabel, FormInputField} from "./FormInput.styled.ts";
import {ChangeEvent, useRef} from "react";

interface IFormInput {
    label: string,
    name: string,
    placeholder?: string,
    type?: string,
    maxLength?: number,
    maskFunction?: (value: string, cursorPosition?: number) => {formattedValue: string, newCursorPosition?: number},
}

export const FormInput = ({label, placeholder, maskFunction, ...props}: IFormInput) => {
    const [field, meta, helpers] = useField(props.name)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let {value} = e.target;

        if (maskFunction) {
            const cursorPosition = e.target.selectionStart || 0;
            const {formattedValue, newCursorPosition} = maskFunction(value, cursorPosition);
            setTimeout(() => {
                if (inputRef.current && newCursorPosition) {
                    inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
                }
            }, 0);
            value = formattedValue;
        }

        void helpers.setValue(value);
    };

    return (
        <>
            <FormInputLabel htmlFor={field.name}>{label}</FormInputLabel>
            <FormInputField id={field.name} type="text" placeholder={placeholder}
                            ref={inputRef}
                            {...field} {...props}
                            onChange={handleChange}/>
            {meta.touched && meta.error &&
                <div className="error">{meta.error}</div>}
        </>
    )
}
