import { CheckmarkCircleIcon } from '../../../icons/CheckmarkCircleIcon/CheckmarkCircleIcon.tsx';
import { ThanksContainer, ThanksTitle } from './Thanks.styled.ts';

export const Thanks = () => {
  return (
    <ThanksContainer>
      <CheckmarkCircleIcon />
      <ThanksTitle>Thank you!</ThanksTitle>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </ThanksContainer>
  );
};
