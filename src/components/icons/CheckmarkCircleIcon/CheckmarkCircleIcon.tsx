import { CheckmarkCircleShadowIcon } from '../CheckmarkCircleShadowIcon.tsx';
import { CheckmarkIcon } from '../CheckmarkIcon.tsx';
import {
  CheckmarkIconWrapperInner,
  CheckmarkIconWrapperInnerShadow,
  CheckmarkIconWrapperOuter,
} from './CheckmarkCircleIcon.styled.ts';

export const CheckmarkCircleIcon = () => {
  return (
    <CheckmarkIconWrapperOuter>
      <CheckmarkIconWrapperInnerShadow>
        <CheckmarkCircleShadowIcon />
      </CheckmarkIconWrapperInnerShadow>
      <CheckmarkIconWrapperInner>
        <CheckmarkIcon />
      </CheckmarkIconWrapperInner>
    </CheckmarkIconWrapperOuter>
  );
};
