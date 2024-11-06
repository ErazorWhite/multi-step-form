import styled from 'styled-components';
import { DESKTOP_BP } from '../../../global/breakpoints.ts';

export const Ul = styled.ul`
  @media screen and ${DESKTOP_BP} {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
