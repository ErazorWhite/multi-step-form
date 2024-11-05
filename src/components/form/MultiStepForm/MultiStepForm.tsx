import {Formik, FormikValues} from "formik";
import {FC} from "react";
import {MultiStepFormFields} from "../MultiStepFormFields/MultiStepFormFields.tsx";
import {useMultiStepForm} from "../../../hooks/useMultiStepForm.ts";
import {multiStepFormValidationSchemas} from "../../../global/utilities/validationSchemas.ts";
import {IFormValues} from "../../../global/types.ts";

const initialValues: IFormValues = {
    name: '',
    email: '',
    phone: '',
    selectedPlan: '',
    isYearly: false,
    pickedAddons: [],
};

const pagesCount = 4;

export const MultiStepForm: FC = () => {
    const {
        currentStepIndex,
        goTo,
        next,
        back,
    } = useMultiStepForm(pagesCount);

    const handleSubmit = (values: FormikValues) => {
        console.log(values)
    }

    return (
        <Formik<IFormValues> initialValues={initialValues}
                             onSubmit={handleSubmit}
                             validationSchema={multiStepFormValidationSchemas[currentStepIndex]}
                             validateOnMount
        >
            {(formikProps) => (
                <MultiStepFormFields
                    {...formikProps}
                    currentStepIndex={currentStepIndex}
                    goTo={goTo}
                    next={next}
                    back={back}
                    pagesCount={pagesCount}
                />
            )}
        </Formik>

    )
}
