import {useField} from "formik";
import {FormInputLabel, FormInputField, FormInputHeadingContainer} from "./FormInput.styled.ts";
import {ChangeEvent, useRef} from "react";
import {Error} from "../../../global/global.styled.ts";

interface IFormInput {
    label: string,
    name: string,
    placeholder?: string,
    type?: string,
    maxLength?: number,
    pattern?: string,
    maskFunction?: (value: string, cursorPosition?: number) => { formattedValue: string, newCursorPosition?: number },
    required?: boolean,
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
            <FormInputHeadingContainer>
                <FormInputLabel htmlFor={field.name}>{label}</FormInputLabel>
                {meta.touched && meta.error &&
                    <Error>{meta.error}</Error>}
            </FormInputHeadingContainer>
            <FormInputField id={field.name} type="text" placeholder={placeholder}
                            ref={inputRef}
                            isTouched={meta.touched}
                            isInvalid={!!meta.error}
                            {...field} {...props}
                            onChange={handleChange}/>
        </>
    )
}
