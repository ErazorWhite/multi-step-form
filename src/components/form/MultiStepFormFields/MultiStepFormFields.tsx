import {Navigation} from "../../Navigation/Navigation.tsx";
import {DesktopDiv, Section, StyledForm} from "./MutliStepFormFields.styled.ts";
import {Thanks} from "../pages/Thanks/Thanks.tsx";
import {PersonalInfo} from "../pages/PersonalInfo.tsx";
import {SelectPlan} from "../pages/SelectPlan.tsx";
import {addons, plans} from "../../../global/data.ts";
import {PickAddons} from "../pages/PickAddons.tsx";
import {FinishingUp} from "../pages/FinishingUp.tsx";
import {FC, useEffect} from "react";
import {FormikProps} from "formik";
import {IFormValues} from "../../../global/types.ts";
import {ButtonGroup} from "../../ButtonGroup/ButtonGroup.tsx";

interface IMultiStepFormFieldsProps extends FormikProps<IFormValues> {
    currentStepIndex: number;
    goTo: (step: number) => void;
    next: () => void;
    back: () => void;
    pagesCount: number
}

export const MultiStepFormFields: FC<IMultiStepFormFieldsProps> = ({
                                                                       submitCount,
                                                                       isValid,
                                                                       validateForm,
                                                                       currentStepIndex,
                                                                       goTo,
                                                                       next,
                                                                       back,
                                                                       pagesCount,
                                                                   }) => {
    useEffect(() => {
        void validateForm();
    }, [currentStepIndex, validateForm]);

    const steps = [
        <PersonalInfo/>,                                            // page 1
        <SelectPlan name="selectedPlan" plans={plans}/>,            // page 2
        <PickAddons name="pickedAddons" addons={addons}/>,          // page 3
        <FinishingUp plans={plans} addons={addons} goTo={goTo}/>,   // page 4
    ]

    return (
        <StyledForm>
            <Navigation pageCount={pagesCount} goTo={goTo} currentStepIndex={currentStepIndex} isValid={isValid}/>

            {submitCount > 0 ? <Section><Thanks/></Section> :
                <DesktopDiv>
                    <Section>
                        {steps[currentStepIndex]}
                    </Section>
                    <ButtonGroup currentStepIndex={currentStepIndex} back={back} next={next} isValid={isValid}
                                 stepsCount={steps.length}/>
                </DesktopDiv>
            }
        </StyledForm>
    )
}
