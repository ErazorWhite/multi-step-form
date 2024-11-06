import { css } from 'styled-components';
import { DESKTOP_BP } from './breakpoints.ts';

// В макете организация типографии не доведена до ума
// Часть на пресетах, часть прописана вручную

export const typography = {
  heading: css`
    font-size: 24px;
    line-height: 0.9;
    letter-spacing: 0;
    font-family: 'Ubuntu', Roboto, sans-serif;
    font-weight: 700;

    @media screen and ${DESKTOP_BP} {
      font-size: 32px;
    }
  `,
  bodyLarge: css`
    font-size: 16px;
    line-height: 1.7;
    letter-spacing: 0;
    font-family: 'Ubuntu', Roboto, sans-serif;
    font-weight: 400;
  `,
};
