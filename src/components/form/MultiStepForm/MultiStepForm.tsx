import {Bottom, Li, Nav, Section, StyledForm, Ul} from "./MultiStepForm.styled.ts";
import {Formik} from "formik";
import {useCallback} from "react";
import {SelectPlan} from "../pages/SelectPlan.tsx";
import {PersonalInfo} from "../pages/PersonalInfo.tsx";
import {PickAddons} from "../pages/PickAddons.tsx";
import {FinishingUp} from "../pages/FinishingUp.tsx";
import {Thanks} from "../pages/Thanks.tsx";
import {useMultiStepForm} from "../../../hooks/useMultiStepForm.ts";
import {Button} from "../../Button/Button.tsx";

const initialValues = {
    name: '', email: '', phone: '', // page 1
    type: '', period: '',           // page 2
    addons: [],                     // page 3
}

const initialSteps = [
    <PersonalInfo/>,    // page 1
    <SelectPlan/>,      // page 2
    <PickAddons/>,      // page 3
    <FinishingUp/>,     // page 4
]


export const MultiStepForm = () => {
    const {
        currentStepIndex,
        step,
        goTo,
        next,
        back,
    } = useMultiStepForm(initialSteps);

    console.log(currentStepIndex + 1)

    const handleGoto = (i: number) => {
        goTo(i);
    }

    const handleSubmit = useCallback((values) => {
        console.log(values);
    }, []);

    return (
        <>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {formik => (
                    <StyledForm>
                        <Nav>
                            <Ul>
                                {initialSteps.map((_, i) => (
                                    <Li key={i}
                                        isActive={i === currentStepIndex}
                                        onClick={() => handleGoto(i)}>{i + 1}
                                    </Li>
                                ))}
                            </Ul>
                        </Nav>

                        {formik?.submitCount > 0 ? <Section><Thanks/></Section> :
                            <>
                                <Section>
                                    {step}
                                </Section>

                                <Bottom justify={currentStepIndex > 0 ? 'space-between' : 'end'}>
                                    {currentStepIndex > 0 &&
                                        <Button onClick={back} type='button' variant="back">Go back</Button>}

                                    {currentStepIndex < initialSteps.length - 1 &&
                                        <Button onClick={next} type='button' variant="next">Next Step</Button>}

                                    {currentStepIndex === initialSteps.length - 1 &&
                                        <Button type='submit' variant="submit">Confirm</Button>}
                                </Bottom>
                            </>
                        }
                    </StyledForm>
                )}
            </Formik>
        </>
    )
}
