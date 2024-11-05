import styled from "styled-components";
import {DESKTOP_BP} from "../../global/breakpoints.ts";

export const SummaryContainer = styled.div`
    padding: 16px;
    background-color: var(--color-very-light-grey);
    border-radius: 8px;
    overflow: scroll;
    margin: 0 0 24px 0;

    font-size: 14px;
    line-height: 20px;
    
    @media screen and ${DESKTOP_BP} {
    font-size: 16px;
        
    }
`

export const SummarySelectedPlanDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 12px 0;
    margin: 0 0 12px 0;
    border-bottom: 1px solid var(--color-light-grey);
`

export const SummarySelectedPlanLabel = styled.span`
    display: block;
    font-weight: 500;
`

export const SummaryChangeButton = styled.button`
    padding: 0;
    border: none;
    font-size: 14px;
    background-color: transparent;
    text-decoration: underline;
    
    transition: var(--animation);
    color: var(--color-grey);
    
    &:hover,
    &:focus {
        color: var(--color-purple);
    }
`

export const SummaryPlanPrice = styled.span`
    font-weight: 700;
`

export const SummaryAddonDetails = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 12px 0;

    &:last-of-type {
        margin: 0;
    }
    
    @media screen and ${DESKTOP_BP} {
        font-size: 14px;
    }
`

export const SummaryAddonLabel = styled.span`
    color: var(--color-grey);
`

export const SummaryTotalDetails = styled.span`
    display: flex;
    justify-content: space-between;
    
`

export const SummaryTotalLabel = styled.span`
    color: var(--color-grey);
    margin: 0 0 0 16px;
    font-size: 14px;
`

export const SummaryTotalPrice = styled.span`
    font-weight: 700;
    color: var(--color-purple);
    
    @media screen and ${DESKTOP_BP} {
        font-size: 20px;
    }
`