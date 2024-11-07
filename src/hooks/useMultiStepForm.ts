import { useState } from 'react';

export const useMultiStepForm = (stepsCount: number) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((prev) => {
      if (prev >= stepsCount) return prev;
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
    if (index < 0 || index >= stepsCount) return;
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    goTo,
    next,
    back,
  };
};
