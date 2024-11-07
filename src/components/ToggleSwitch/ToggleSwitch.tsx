import { ToggleContainer, ToggleMainBlock, ToggleOption, ToggleThumb } from './ToggleSwitch.styled';
import { FC } from 'react';

interface ToggleSwitchProps {
  isChecked: boolean;
  onToggle: () => void;
}

export const ToggleSwitch: FC<ToggleSwitchProps> = ({ isChecked, onToggle }) => {
  return (
    <ToggleMainBlock onClick={onToggle} type="button" aria-pressed={isChecked}>
      <ToggleOption active={!isChecked}>Monthly</ToggleOption>
      <ToggleContainer>
        <ToggleThumb isChecked={isChecked} />
      </ToggleContainer>
      <ToggleOption active={isChecked}>Yearly</ToggleOption>
    </ToggleMainBlock>
  );
};
