import styled from "styled-components";

// Navigation

export const Nav = styled.nav`
    background-image: url('/src/assets/backgrounds/background_mobile.svg');
    background-size: cover;
    min-height: 140px;
    padding-top: 32px;
    `

export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    gap: 16px;
    color: var(--color-white);
    `

export const Li = styled.li`
    height: 33px;
    width: 33px;
    text-align: center;
    align-content: center;
    border: 1px solid var(--color-white);
    border-radius: 50%;
    
    font-weight: 700;
    font-size: 14px;
    
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