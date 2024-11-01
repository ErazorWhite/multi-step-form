import styled from "styled-components";

export const SummaryContainer = styled.div`
    padding: 16px;
    background-color: var(--color-very-light-grey);
    border-radius: 8px;
    overflow: scroll;
    margin: 0 0 24px 0;

    font-size: 14px;
    line-height: 20px;
`

export const SummaryPlanDetails = styled.div`
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
    background-color: transparent;
    text-decoration: underline;

    color: var(--color-grey);
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
    font-weight: 14px;
`

export const SummaryTotalPrice = styled.span`
    font-weight: 700;
    color: var(--color-purple);
`