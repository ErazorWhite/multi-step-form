import styled from "styled-components";
import {DESKTOP_BP} from "./global/breakpoints";

export const StyledContainer = styled.div`
    max-width: 415px;
    height: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    @media screen and ${DESKTOP_BP} {
        padding: 100px 20px 0 20px;
        max-width: 980px;
    }
`