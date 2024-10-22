import {ReactElement, useState} from "react";

export const useMultiStepForm = (steps: ReactElement[]) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const next = () => {
        setCurrentStepIndex((prev) => {
            if (prev >= steps.length - 1) return prev;
            return prev + 1;
        });
    };

    const back = () => {
        setCurrentStepIndex((prev) => {
            if (prev <= 0) return prev;
            return prev - 1;
        });
    };

    const goTo = (index: number) => {
        if (index < 0 || index >= steps.length) return;
        setCurrentStepIndex(index);
    };

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        goTo,
        next,
        back,
    }
}