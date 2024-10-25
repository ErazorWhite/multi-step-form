import styled from "styled-components";
import {typography} from "../../global/typography.ts";

export const PageBoxHeading = styled.h1`
    ${typography.heading};
    margin: 0 0 9px 0;
`

export const PageBoxDescription = styled.p`
    ${typography.bodyLarge};
    margin: 0 0 22px 0;
    color: var(--color-gray);
`