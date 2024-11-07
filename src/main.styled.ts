import styled from 'styled-components';
import { DESKTOP_BP } from './global/breakpoints';

export const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;

  @media screen and ${DESKTOP_BP} {
    padding: 100px 20px 0 20px;
    max-width: 980px;
  }
`;
