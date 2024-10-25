import {useField} from "formik";
import {FormInputLabel, FormInputField} from "./FormInput.styled.ts";

interface IFormInput {
    label: string,
    name: string,
    placeholder?: string,
}

export const FormInput = ({label, placeholder, ...props}: IFormInput) => {
    const [field, meta] = useField(props.name)
    return (
        <>
            <FormInputLabel htmlFor={field.name}>{label}</FormInputLabel>
            <FormInputField id={field.name} type="text" placeholder={placeholder} {...field} {...props}/>
            {meta.touched && meta.error &&
                <div className="error">{meta.error}</div>}
        </>
    )
}
