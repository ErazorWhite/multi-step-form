import styled from "styled-components";
import {DESKTOP_BP} from "./breakpoints.ts";

interface ILi {
    lastMargin?: number;
}

export const Li = styled.li.withConfig({shouldForwardProp: (prop) => prop !== "lastMargin"})<ILi>`
    margin: 0 0 12px 0;
    width: 100%;

    &:last-of-type {
        margin: 0 0 ${({lastMargin = 0}) => lastMargin} 0;
    }

    @media screen and ${DESKTOP_BP} {
        margin: 0;
        &:last-of-type {
            margin: 0;
        }
    }
`