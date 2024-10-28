import styled from "styled-components";

interface IRadioIconThumb {
    backgroundColor: string;
}

export const RadioIconBox = styled.span.withConfig({shouldForwardProp: (prop) => prop !== 'backgroundColor'})<IRadioIconThumb>`
    display: block;
    text-align: center;
    align-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({backgroundColor}) => `var(--color-${backgroundColor})`};
`

export const RadioLabelBox = styled.label`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 16px;
    margin: 0 0 12px 0;
    
    border: 1px solid var(--color-light-gray);
    border-radius: 8px;
    
    font-family: 'Ubuntu', Roboto, sans-serif;
    letter-spacing: 0;
    font-size: 16px;
    font-weight: 500;
    
    &:last-of-type {
        margin: 0 0 24px 0;
    }
`

export const StyledRadioInput = styled.input`
    &:checked + ${RadioLabelBox} {
        border: 1px solid var(--color-purple);
    }
`

export const Price = styled.span`
    display: block;
    margin: 7px 0 0 0;
    color: var(--color-gray);
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
`
