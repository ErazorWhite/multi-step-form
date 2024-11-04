import {Bottom, DesktopDiv, Section, StyledForm,} from "./MultiStepForm.styled.ts";
import {Formik} from "formik";
import {FC, useCallback} from "react";
import {SelectPlan} from "../pages/SelectPlan.tsx";
import {PersonalInfo} from "../pages/PersonalInfo.tsx";
import {PickAddons} from "../pages/PickAddons.tsx";
import {FinishingUp} from "../pages/FinishingUp.tsx";
import {Thanks} from "../pages/Thanks/Thanks.tsx";
import {useMultiStepForm} from "../../../hooks/useMultiStepForm.ts";
import {Button} from "../../Button/Button.tsx";
import {addons, plans} from "../../../global/data.ts";
import {Navigation} from "../../Navigation/Navigation.tsx";
import * as Yup from 'yup';
import {MAXLENGTH_NAME} from "../../../global/сonstants.ts";
import {PHONE_REGEXP} from "../../../global/regexp.ts";

const multiStepFormValidationSchema = Yup.object({
    name: Yup.string()
        .max(MAXLENGTH_NAME, `Must be ${MAXLENGTH_NAME} characters or less`)
        .required('This field is required'),
    email: Yup.string()
        .email()
        .required('This field is required'),
    phone: Yup.string()
        .matches(PHONE_REGEXP, 'Incorrect phone number format, it should look like "+1 234 567 890"')
        .required('Required'),
});

const initialValues = {
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

    const initialSteps = [
        <PersonalInfo/>,                                            // page 1
        <SelectPlan name="selectedPlan" plans={plans}/>,            // page 2
        <PickAddons name="pickedAddons" addons={addons}/>,          // page 3
        <FinishingUp plans={plans} addons={addons} goTo={goTo}/>,   // page 4
    ]

    const handleSubmit = useCallback((values) => {
        console.log(values);
    }, []);

    return (
        <>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}
                    validationSchema={multiStepFormValidationSchema}>
                {formik => (
                    <StyledForm>

                        <Navigation pageCount={pagesCount} goTo={goTo} currentStepIndex={currentStepIndex}/>

                        {formik?.submitCount > 0 ? <Section><Thanks/></Section> :
                            <DesktopDiv>
                                <Section>
                                    {initialSteps[currentStepIndex]}
                                </Section>
                                <Bottom justify={currentStepIndex > 0 ? 'space-between' : 'end'}>
                                    {currentStepIndex > 0 &&
                                        <Button onClick={back} type='button' variant="back">Go back</Button>}

                                    {currentStepIndex < initialSteps.length - 1 &&
                                        <Button onClick={next} type='button' variant="next">Next Step</Button>}

                                    {currentStepIndex === initialSteps.length - 1 &&
                                        <Button type='submit' variant="submit">Confirm</Button>}
                                </Bottom>
                            </DesktopDiv>
                        }
                    </StyledForm>
                )}
            </Formik>
        </>
    )
}
