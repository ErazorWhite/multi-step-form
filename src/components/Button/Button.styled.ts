import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';
import { DESKTOP_BP } from '../../global/breakpoints.ts';

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'back' | 'next' | 'submit';
  disabled?: boolean;
}

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})<StyledButtonProps>`
  min-width: 124px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ variant }) => {
    switch (variant) {
      case 'back':
        return 'var(--color-grey)';
      case 'next':
      case 'submit':
      default:
        return 'var(--color-white)';
    }
  }};
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'back':
        return 'transparent';
      case 'submit':
        return 'var(--color-purple)';
      case 'next':
      default:
        return 'var(--color-denim)';
    }
  }};
  background-color: ${({ disabled }) => disabled && 'var(--color-light-grey)'};
  transition: var(--animation);

  &:hover,
  &:focus {
    background-color: ${({ disabled, variant }) => {
      if (!disabled) {
        switch (variant) {
          case 'back':
            return 'transparent';
          case 'submit':
            return 'var(--color-purple-active)';
          case 'next':
          default:
            return 'var(--color-denim-active)';
        }
      }
    }};
  }
  @media screen and ${DESKTOP_BP} {
    font-size: 16px;
    padding: 14px 25px;
  }
`;
