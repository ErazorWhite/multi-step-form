import styled from "styled-components";
import {typography} from "../../../../global/typography.ts";

export const ThanksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 47px 0;
    ${typography.bodyLarge};
    color: var(--color-grey);
`

export const ThanksTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: var(--color-denim);
    margin: 24px 0 9px 0;
`