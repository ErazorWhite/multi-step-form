import styled from 'styled-components';
import { DESKTOP_BP } from '../../../global/breakpoints.ts';

export const Ul = styled.ul`
  @media screen and ${DESKTOP_BP} {
    display: flex;
    gap: 13px;
    margin: 0 0 32px 0;
  }
`;
