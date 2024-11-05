import styled from "styled-components";
import {DESKTOP_BP} from "../../global/breakpoints.ts";

interface ILabelBox {
    alignItems?: "flex-start" | "center";
    flexDirection?: "column" | "row";
}

export const LabelBox = styled.label.withConfig({ shouldForwardProp: (prop) => !['alignItems', 'flexDirection'].includes(prop), })<ILabelBox>`
    display: flex;
    align-items: ${({alignItems = "flex-start"}) => alignItems};
    gap: 14px;
    padding: 14px 16px;

    border: 1px solid var(--color-light-grey);
    border-radius: 8px;

    font-family: 'Ubuntu', Roboto, sans-serif;
    letter-spacing: 0;
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;

    overflow: auto;
    transition: var(--animation);
    
    &:hover,
    &:focus {
        border-color: var(--color-purple);
    }
    
    @media screen and ${DESKTOP_BP} {
        flex-direction: ${({flexDirection = "row"})=> flexDirection};
        gap: 39px;
    }
`
export const StyledInput = styled.input`
    &:checked + ${LabelBox} {
        border: 1px solid var(--color-purple);
        background-color: var(--color-very-light-grey);
    }
`