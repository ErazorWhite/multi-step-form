import styled, {css} from "styled-components";
import {Form} from "formik";

export const StyledForm = styled(Form)`
    height: 100%;
    display: flex;
    flex-direction: column;
`

// Navigation

export const Nav = styled.nav`
    background-image: url('/src/assets/backgrounds/background_mobile.svg');
    background-size: cover;
    min-height: 172px;
    padding-top: 32px;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    gap: 16px;
    color: var(--color-white);
`

interface ILi {
    isActive: boolean;
}

export const Li = styled.li.withConfig({shouldForwardProp: (prop) => prop !== "isActive"})<ILi>`
    height: 33px;
    width: 33px;
    text-align: center;
    align-content: center;
    border: 1px solid var(--color-white);
    border-radius: 50%;

    font-weight: 700;
    font-size: 14px;

    ${({isActive}) => isActive && css`
        color: var(--color-denim);
        background-color: var(--color-light-blue);
    `}
    
    &:hover {
        color: var(--color-denim);
        background-color: var(--color-light-blue);
        transition: var(--animation);
    }
`

// Main Section

export const Section = styled.section`
    background-color: var(--color-white);
    margin: -73px 16px 0 16px;
    border-radius: 10px;
    padding: 32px 24px;
`

// Bottom

interface IBottom {
    justify: string;
}

export const Bottom = styled.div.withConfig({shouldForwardProp: (prop) => prop !== "justify"})<IBottom>`
    margin-top: auto;
    padding: 16px;
    display: flex;
    min-height: 72px;
    background-color: var(--color-white);
    justify-content: ${({justify}) => justify};
`