import styled from "styled-components";

export const CheckmarkIconWrapperOuter = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 56px;
    border-radius: 50%;
    background-color: var(--color-pink);
    overflow: hidden;
`

export const CheckmarkIconWrapperInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: var(--color-white);
    stroke: var(--color-pink-dark);
    z-index: 1;
`

export const CheckmarkIconWrapperInnerShadow = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-25%, -25%);
    fill: var(--color-pink-dark);
    z-index: 0;
`