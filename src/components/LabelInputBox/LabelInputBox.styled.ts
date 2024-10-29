import styled from "styled-components";

export const RadioLabelBox = styled.label`
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 14px 16px;
    
    border: 1px solid var(--color-light-gray);
    border-radius: 8px;
    
    font-family: 'Ubuntu', Roboto, sans-serif;
    letter-spacing: 0;
    line-height: 20px;
    font-size: 16px;
    font-weight: 500;
`
export const StyledRadioInput = styled.input`
    &:checked + ${RadioLabelBox} {
        border: 1px solid var(--color-purple);
    }
`