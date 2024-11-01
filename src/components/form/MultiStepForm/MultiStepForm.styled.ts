import styled from "styled-components";
import {Form} from "formik";
import {DESKTOP_BP} from "../../../global/breakpoints.ts";

export const StyledForm = styled(Form)`
    height: 100%;
    display: flex;
    flex-direction: column;
    
    @media screen and ${DESKTOP_BP} {
        flex-direction: row;
        max-height: 600px;

        background-color: var(--color-white);
        border-radius: 15px;
        padding: 16px;
    }
`

// Main Section

export const DesktopDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    
    @media screen and ${DESKTOP_BP} {
        display: flex;
        flex-direction: column;
        padding: 46px 100px 16px 100px;
        flex-shrink: 0;
        height: 100%;
        width: 650px;
    }
`

export const Section = styled.section`
    background-color: var(--color-white);
    margin: -73px 16px 0 16px;
    border-radius: 10px;
    padding: 32px 24px;
    overflow: auto;
    box-shadow: 0 25px 40px -20px var(--color-black-opacity);
    
    @media screen and ${DESKTOP_BP} {
        margin: 0;
        box-shadow: none;
        padding: 0;
    }
`

// Bottom

interface IBottom {
    justify: string;
}

export const Bottom = styled.div.withConfig({shouldForwardProp: (prop) => prop !== "justify"})<IBottom>`
    display: flex;
    margin-top: auto;
    padding: 16px;
    min-height: 72px;
    background-color: var(--color-white);
    justify-content: ${({justify}) => justify};
    
    @media screen and ${DESKTOP_BP} {
        //margin: 0;
    }
`