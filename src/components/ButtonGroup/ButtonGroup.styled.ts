// Bottom

import styled from "styled-components";

interface IBottom {
    justify: string;
}

export const ButtonsBlock = styled.div.withConfig({shouldForwardProp: (prop) => prop !== "justify"})<IBottom>`
    display: flex;

    padding: 16px;
    min-height: 72px;
    background-color: var(--color-white);
    justify-content: ${({justify}) => justify};
`