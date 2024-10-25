import styled from "styled-components";

interface IRadioIconThumb {
    backgroundColor: string;
}

export const RadioIconThumb = styled.span.withConfig({shouldForwardProp: (prop) => prop !== 'backgroundColor'})<IRadioIconThumb>`
    display: block;
    text-align: center;
    align-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({backgroundColor}) => `var(--color-${backgroundColor})`};
`