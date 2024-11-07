import styled from 'styled-components';
import { typography } from '../../global/typography.ts';
import { DESKTOP_BP } from '../../global/breakpoints.ts';

export const PageBoxHeading = styled.h1`
  ${typography.heading};
  color: var(--color-denim);
  margin: 0 0 9px 0;
  overflow-x: auto;

  @media screen and ${DESKTOP_BP} {
    margin: 0 0 11px 0;
  }
`;

export const PageBoxDescription = styled.p`
  ${typography.bodyLarge};
  margin: 0 0 22px 0;
  color: var(--color-grey);
  overflow: auto;

  @media screen and ${DESKTOP_BP} {
    margin: 0 0 40px 0;
  }
`;
