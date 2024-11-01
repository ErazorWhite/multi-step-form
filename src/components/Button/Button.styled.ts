import styled from "styled-components";
import {ButtonHTMLAttributes} from "react";
import {DESKTOP_BP} from "../../global/breakpoints.ts";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "back" | "next" | "submit";
}

export const StyledButton = styled.button.withConfig({shouldForwardProp: (prop) => prop !== "variant"})<StyledButtonProps>`
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    color: ${({variant}) => {
        switch (variant) {
            case "back":
                return "var(--color-grey)";
            case "next":
            case "submit":
            default:
                return "var(--color-white)";
        }
    }};
    background-color: ${({variant}) => {
        switch (variant) {
            case "back":
                return "transparent";
            case "submit":
                return "var(--color-purple)";
            case "next":
            default:
                return "var(--color-denim)";
        }
    }};
    @media screen and ${DESKTOP_BP} {
        font-size: 16px;
        padding: 14px 25px;
    };
`