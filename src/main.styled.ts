import styled from "styled-components";
import {DESKTOP_BP} from "./global/breakpoints";

export const StyledContainer = styled.div`
    max-width: 415px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: center;
    align-items: center;

    @media screen and ${DESKTOP_BP} {
        max-width: 1088px;
        
        padding-top: 200px;
    }
`