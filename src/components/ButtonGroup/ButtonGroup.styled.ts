// Bottom

import styled from 'styled-components';
import { DESKTOP_BP, MOBILE_BP } from '../../global/breakpoints.ts';

export const ButtonsBlock = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'justify',
})`
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: var(--color-white);

  @media screen and ${MOBILE_BP} {
    width: 100%;
  }

  @media screen and ${DESKTOP_BP} {
    padding: 0;
  }
`;

interface IButtonWidthLimiter {
  justify: string;
}

export const ButtonWidthLimiter = styled.div<IButtonWidthLimiter>`
  display: flex;
  width: 100%;
  max-width: 343px;
  justify-content: ${({ justify }) => justify};
  @media screen and ${DESKTOP_BP} {
    max-width: 450px;
  }
`;
