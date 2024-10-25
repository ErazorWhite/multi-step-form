import styled from "styled-components";
import {ButtonHTMLAttributes} from "react";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "back" | "next" | "submit";
}

export const StyledButton = styled.button.withConfig({shouldForwardProp: (prop) => prop !== "variant"})<StyledButtonProps>`
    padding: 12px 16px;
    font-size: 14px;
    color: ${({variant}) => {
        switch (variant) {
            case "back":
                return "var(--color-gray)";
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
    }}
`