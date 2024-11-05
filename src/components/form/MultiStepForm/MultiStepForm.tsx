import {Formik} from "formik";
import {FC} from "react";
import * as Yup from 'yup';
import {MAXLENGTH_NAME} from "../../../global/сonstants.ts";
import {SPECIAL_CHARS_REGEXP, PHONE_REGEXP} from "../../../global/regexp.ts";
import {MultiStepFormFields} from "../MultiStepFormFields/MultiStepFormFields.tsx";

const formValidationSchemaStep1 = Yup.object({
    name: Yup.string()
        .matches(SPECIAL_CHARS_REGEXP, 'Name cannot contain special characters')
        .max(MAXLENGTH_NAME, `Must be ${MAXLENGTH_NAME} characters or less`)
        .required('This field is required'),
    email: Yup.string()
        .email()
        .required('This field is required'),
    phone: Yup.string()
        .matches(PHONE_REGEXP, 'Incorrect phone number, example: +1 234 567 890')
        .required('Required'),
});

const formValidationSchemaStep2 = Yup.object(
    {
        selectedPlan: Yup.string().required('Please select a plan'),
    }
)

const initialValues = {
    name: '',
    email: '',
    phone: '',
    selectedPlan: '',
    isYearly: false,
    pickedAddons: [],
};

export const MultiStepForm: FC = () => {

    const handleSubmit = (values) => {
        console.log(values)
    }
    return (
        <Formik initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={formValidationSchemaStep1}
                component={MultiStepFormFields}
                validateOnMount
                enableReinitialize
        />
    )
}
