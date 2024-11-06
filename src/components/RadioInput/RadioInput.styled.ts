import styled from 'styled-components';
import { DESKTOP_BP } from '../../global/breakpoints.ts';

interface IRadioIconThumb {
  backgroundColor: string;
}

export const RadioIconBox = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<IRadioIconThumb>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 3px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  fill: white;
  background-color: ${({ backgroundColor }) => `var(--color-${backgroundColor})`};
  @media screen and ${DESKTOP_BP} {
    margin: 0;
  }
`;

export const Label = styled.span`
  font-weight: 500;
`;

export const Price = styled.span`
  display: block;
  margin: 7px 0 3px 0;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-grey);
  @media screen and ${DESKTOP_BP} {
    margin: 7px 0 6px 0;
  }
`;

export const ExtraDetails = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-denim);
`;
