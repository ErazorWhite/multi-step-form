import styled from "styled-components";
import {DESKTOP_BP} from "./utilities/breakpoints";

export const StyledContainer = styled.div`
    max-width: 415px;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media screen and ${DESKTOP_BP} {
        max-width: 1088px;
        
        padding-top: 200px;
    }
`