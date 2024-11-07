import styled from 'styled-components';
import { Form } from 'formik';
import { DESKTOP_BP, MOBILE_BP } from '../../../global/breakpoints.ts';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  @media screen and ${MOBILE_BP} {
    height: 100%;
    align-items: center;
  }
  @media screen and ${DESKTOP_BP} {
    flex-direction: row;
    min-height: 600px;
    background-color: var(--color-white);
    border-radius: 15px;
    padding: 16px;
  }
  box-shadow: 0 25px 40px -20px var(--color-black-opacity);
`;

// Main Section

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media screen and ${MOBILE_BP} {
    align-items: center;
    height: 100%;
  }
  @media screen and ${DESKTOP_BP} {
    padding: 46px 100px 16px 100px;
    flex-shrink: 0;
    width: 650px;
  }
`;

export const Section = styled.section`
  background-color: var(--color-white);
  margin: -73px 16px 0 16px;
  border-radius: 10px;
  padding: 32px 24px;

  @media screen and ${MOBILE_BP} {
    max-width: 343px;
    box-shadow: 0 25px 40px -20px var(--color-black-opacity);
  }

  @media screen and ${DESKTOP_BP} {
    margin: 0;
    box-shadow: none;
    padding: 0;
  }
`;
