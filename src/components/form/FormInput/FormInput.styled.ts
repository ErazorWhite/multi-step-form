import styled from "styled-components";
import {DESKTOP_BP} from "../../../global/breakpoints.ts";

export const FormInputHeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FormInputLabel = styled.label`
    font-size: 12px;
    letter-spacing: 0;
    font-family: 'Ubuntu', Roboto, sans-serif;
    font-weight: 400;

    color: var(--color-denim);
    display: block;
    margin: 0 0 3px 0;

    overflow: scroll;

    @media screen and ${DESKTOP_BP} {
        font-size: 14px;
        margin: 0 0 8px 0;
    }
`

interface IFormInputField {
    isTouched: boolean;
    isInvalid: boolean;
}

export const FormInputField = styled.input.withConfig({shouldForwardProp: (prop) => !["isTouched", "isInvalid"].includes(prop)})<IFormInputField>`
    font-size: 15px;
    letter-spacing: 0;
    font-family: 'Ubuntu', Roboto, sans-serif;
    font-weight: 500;

    padding: 11px 16px 12px 16px;
    margin: 0 0 16px 0;
    width: 100%;
    border: 1px solid ${({
                             isTouched,
                             isInvalid
                         }) => isTouched && isInvalid ? "var(--color-error)" : "var(--color-border)"};
    border-radius: 4px;
    transition: var(--animation);

    &:hover,
    &:focus {
        border-color: var(--color-purple);
    }
    @media screen and ${DESKTOP_BP} {
        font-size: 16px;
        margin: 0 0 24px 0;
    }
`