import styled from "styled-components";
import {RadioLabelBox, StyledRadioInput} from "../LabelInputBox/LabelInputBox.styled.ts";

export const CheckmarkBox = styled.span`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    border: 1px solid var(--color-light-grey);
    border-radius: 4px;

    ${StyledRadioInput}:checked ~ ${RadioLabelBox} > & {
        background-color: var(--color-purple);
        stroke: var(--color-white);
    }
`
export const CheckmarkBoxLabel = styled.span`
    font-size: 14px;
    color: var(--color-denim);
`
export const CheckmarkBoxDescription = styled.span`
    display: block;
    font-size: 12px;
    color: var(--color-grey);
`
export const CheckmarkBoxPrice = styled.span`
    font-size: 12px;
    margin-left: auto;
    color: var(--color-purple);
`