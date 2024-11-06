import styled from 'styled-components';
import { LabelBox, StyledInput } from '../LabelInputBox/LabelInputBox.styled.ts';
import { DESKTOP_BP } from '../../global/breakpoints.ts';

export const CheckmarkBox = styled.span`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid var(--color-light-grey);
  border-radius: 4px;

  ${StyledInput}:checked ~ ${LabelBox} > & {
    background-color: var(--color-purple);
    stroke: var(--color-white);
  }
`;
export const CheckmarkBoxLabel = styled.span`
  display: block;
  margin: 0 0 3px 0;
  font-size: 14px;
  color: var(--color-denim);
  font-weight: 500;
  @media screen and ${DESKTOP_BP} {
    font-size: 16px;
    margin: 0 0 7px 0;
  }
`;
export const CheckmarkBoxDescription = styled.span`
  display: block;
  font-size: 12px;
  color: var(--color-grey);
  @media screen and ${DESKTOP_BP} {
    font-size: 14px;
  }
`;
export const CheckmarkBoxPrice = styled.span`
  font-size: 12px;
  margin-left: auto;
  color: var(--color-purple);

  @media screen and ${DESKTOP_BP} {
    font-size: 14px;
  }
`;
