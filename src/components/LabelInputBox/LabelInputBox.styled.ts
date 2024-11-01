import styled from "styled-components";
import {DESKTOP_BP} from "../../global/breakpoints.ts";

interface IRadioLabelBox {
    alignItems?: "flex-start" | "center";
    flexDirection?: "column" | "row";
}

export const RadioLabelBox = styled.label.withConfig({ shouldForwardProp: (prop) => !['alignItems', 'flexDirection'].includes(prop), })<IRadioLabelBox>`
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
    font-weight: 500;

    overflow: auto;
    
    @media screen and ${DESKTOP_BP} {
        flex-direction: ${({flexDirection = "row"})=> flexDirection};
        gap: 39px;
    }
`
export const StyledRadioInput = styled.input`
    &:checked + ${RadioLabelBox} {
        border: 1px solid var(--color-purple);
    }
`