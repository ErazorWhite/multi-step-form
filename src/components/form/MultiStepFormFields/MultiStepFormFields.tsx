import {Navigation} from "../../Navigation/Navigation.tsx";
import {Bottom, DesktopDiv, Section, StyledForm} from "./MutliStepFormFields.styled.ts";
import {Thanks} from "../pages/Thanks/Thanks.tsx";
import {Button} from "../../Button/Button.tsx";
import {useMultiStepForm} from "../../../hooks/useMultiStepForm.ts";
import {PersonalInfo} from "../pages/PersonalInfo.tsx";
import {SelectPlan} from "../pages/SelectPlan.tsx";
import {addons, plans} from "../../../global/data.ts";
import {PickAddons} from "../pages/PickAddons.tsx";
import {FinishingUp} from "../pages/FinishingUp.tsx";
import {FC} from "react";
import {FormikProps, FormikValues} from "formik";

const pagesCount = 4;

export const MultiStepFormFields: FC<FormikProps<FormikValues>> = ({submitCount, isValid}) => {
    const {
        currentStepIndex,
        goTo,
        next,
        back,
    } = useMultiStepForm(pagesCount);

    console.log(isValid)
    console.log(currentStepIndex)

    const initialSteps = [
        <PersonalInfo/>,                                            // page 1
        <SelectPlan name="selectedPlan" plans={plans}/>,            // page 2
        <PickAddons name="pickedAddons" addons={addons}/>,          // page 3
        <FinishingUp plans={plans} addons={addons} goTo={goTo}/>,   // page 4
    ]

    return (
        <StyledForm>
            <Navigation pageCount={pagesCount} goTo={goTo} currentStepIndex={currentStepIndex}/>

            {submitCount > 0 ? <Section><Thanks/></Section> :
                <DesktopDiv>
                    <Section>
                        {initialSteps[currentStepIndex]}
                    </Section>
                    <Bottom justify={currentStepIndex > 0 ? 'space-between' : 'end'}>
                        {currentStepIndex > 0 &&
                            <Button onClick={back} type='button' variant="back" disabled={!isValid}>Go back</Button>}

                        {currentStepIndex < initialSteps.length - 1 &&
                            <Button onClick={next} type='button' variant="next" disabled={!isValid}>Next Step</Button>}

                        {currentStepIndex === initialSteps.length - 1 &&
                            <Button type='submit' variant="submit" disabled={!isValid}>Confirm</Button>}
                    </Bottom>
                </DesktopDiv>
            }
        </StyledForm>
    )
}
