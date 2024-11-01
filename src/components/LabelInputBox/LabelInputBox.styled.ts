import styled from "styled-components";

interface IRadioLabelBox {
    alignItems: "flex-start" | "center";
}

export const RadioLabelBox = styled.label.withConfig({ shouldForwardProp: (prop) => prop !== 'alignItems', })<IRadioLabelBox>`
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
`
export const StyledRadioInput = styled.input`
    &:checked + ${RadioLabelBox} {
        border: 1px solid var(--color-purple);
    }
`