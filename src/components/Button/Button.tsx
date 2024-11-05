import {ButtonHTMLAttributes, ReactNode} from "react";
import {StyledButton} from "./Button.styled.ts";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    variant?: "back" | "next" | "submit";
    onClick?: () => void;
    children?: ReactNode;
    disabled?: boolean;
}

export const Button = ({type, onClick, children, variant = "back", disabled = false}: IButton) => (
    <StyledButton type={type}
                  onClick={onClick}
                  variant={variant}
                  disabled={disabled}>
        {children}
    </StyledButton>
)