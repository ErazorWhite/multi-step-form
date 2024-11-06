import styled, {css} from "styled-components";
import {DESKTOP_BP} from "../../global/breakpoints.ts";

export const Nav = styled.nav`
    background-image: url(./backgrounds/background_mobile.svg);
    background-size: cover;
    min-height: 172px;
    padding-top: 32px;

    @media screen and ${DESKTOP_BP} {
        min-width: 274px;
        padding: 40px 32px;
        background-image: url('./backgrounds/background_desktop.svg');
        border-radius: 15px;
    }
`

export const NavUl = styled.ul`
    display: flex;
    justify-content: center;
    gap: 16px;
    color: var(--color-white);

    @media screen and ${DESKTOP_BP} {
        flex-direction: column;
        gap: 32px;
    }
`


interface INavNumberItem {
    isActive: boolean;
}

export const NavNumberItemCircle  = styled.span.withConfig({shouldForwardProp: (prop) => prop !== "isActive"})<INavNumberItem>`
    display: block;
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
        background-color: var(--color-sky-blue);
    `}
    &:hover,
    &:focus {
        color: var(--color-denim);
        background-color: var(--color-sky-blue);
        transition: var(--animation);
    }
`

export const NavDesktopDetails = styled.div`
    display: none;
    @media screen and ${DESKTOP_BP} {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`

export const NavStepNumber = styled.span`
    font-size: 12px;
    color: var(--color-light-blue);
`

export const NavStepLabel = styled.span`
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    color: var(--color-white);
`

export const NavButton = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    color: inherit;
    padding: 0;
    @media screen and ${DESKTOP_BP} {
        display: flex;
        gap: 16px;
        text-align: start;
    }
`