import styled from 'styled-components';

export const ToggleMainBlock = styled.button`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 14px 56px;
    align-items: center;
    width: 100%;
    background-color: var(--color-very-light-grey);
    border-radius: 8px;

    overflow: auto;
`

interface ToggleOptionProps {
    active: boolean;
}

export const ToggleOption = styled.div.withConfig({shouldForwardProp: (prop) => prop !== "active"})<ToggleOptionProps>`
    font-size: 14px;
    font-weight: 500;
    color: ${({active}) => (active ? 'var(--color-denim)' : 'var(--color-grey)')};
    transition: color 0.3s;
`;

export const ToggleContainer = styled.div`
    position: relative;
    display: flex;
    flex-shrink: 0;
    width: 38px;
    height: 20px;
    background-color: var(--color-denim);
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
`;

interface ToggleThumbProps {
    isChecked: boolean;
}

export const ToggleThumb = styled.div.withConfig({shouldForwardProp: (prop) => prop !== "isChecked"})<ToggleThumbProps>`
  position: absolute;
  top: 4px;
  left: ${({ isChecked }) => (isChecked ? 'calc(100% - 15px)' : '3px')};
  width: 12px;
  height: 12px;
  background-color: var(--color-white);
  border-radius: 30px;
  transition: left 0.3s;
  z-index: 0;
`;
