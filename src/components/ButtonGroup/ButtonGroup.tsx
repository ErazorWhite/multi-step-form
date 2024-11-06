import { Button } from '../Button/Button.tsx';
import { ButtonsBlock, ButtonWidthLimiter } from './ButtonGroup.styled.ts';
import { FC } from 'react';

interface IButtonGroup {
  currentStepIndex: number;
  back: () => void;
  next: () => void;
  isValid: boolean;
  stepsCount: number;
}

export const ButtonGroup: FC<IButtonGroup> = ({
  currentStepIndex,
  back,
  next,
  isValid,
  stepsCount,
}) => {
  return (
    <ButtonsBlock>
      <ButtonWidthLimiter justify={currentStepIndex > 0 ? 'space-between' : 'end'}>
        {currentStepIndex > 0 && (
          <Button onClick={back} type="button" variant="back" disabled={!isValid}>
            Go back
          </Button>
        )}

        {currentStepIndex < stepsCount - 1 && (
          <Button onClick={next} type="button" variant="next" disabled={!isValid}>
            Next Step
          </Button>
        )}

        {currentStepIndex === stepsCount - 1 && (
          <Button type="submit" variant="submit" disabled={!isValid}>
            Confirm
          </Button>
        )}
      </ButtonWidthLimiter>
    </ButtonsBlock>
  );
};
