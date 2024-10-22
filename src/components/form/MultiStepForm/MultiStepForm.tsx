import {Li, Nav, Section, Ul} from "./MultiStepForm.styled.ts";
import {Form, Formik} from "formik";
import {useCallback, useState} from "react";
import {SelectPlan} from "../pages/SelectPlan.tsx";
import {PersonalInfo} from "../pages/PersonalInfo.tsx";
import {PickAddons} from "../pages/PickAddons.tsx";
import {FinishingUp} from "../pages/FinishingUp.tsx";
import {Thanks} from "../pages/Thanks.tsx";
import {useMultiStepForm} from "../../../hooks/useMultiStepForm.ts";

const initialSteps = [
    <PersonalInfo/>,
    <SelectPlan/>,
    <PickAddons/>,
    <FinishingUp/>,
    <Thanks/>
]

const initialValues = {
    personalInfo: {name: '', email: '', phone: ''},
    plan: {type: '', period: ''},
    addons: [''],
}


export const MultiStepForm = () => {
    const {
        currentStepIndex,
        step,
        goTo,
        next,
        back,
    } = useMultiStepForm(initialSteps);
    const [formData, setFormData] = useState(initialValues);

    const handleGoto = (i: number) => {
        goTo(i);
    }

    const handleSubmit = useCallback(() => {
        console.log(formData);
    }, []);

    return (
        <>
            <Nav>
                <Ul>
                    {initialSteps.map((_, i) => (
                        <Li key={i} onClick={() => {
                            handleGoto(i)
                        }}>{i + 1}</Li>
                    ))}
                </Ul>
            </Nav>

            <Section>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                        {currentStepIndex + 1} / {initialSteps.length}

                        {step}

                        <div>
                            {currentStepIndex > 0 && <button onClick={back} type='button'>Go back</button>}
                            {currentStepIndex < initialSteps.length - 1 &&
                                <button onClick={next} type='button'>Next Step</button>}
                            {currentStepIndex === initialSteps.length - 1 && <button type='submit'>Confirm</button>}
                        </div>
                    </Form>
                </Formik>
            </Section>
        </>
    )
}
