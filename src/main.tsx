import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { StyledContainer } from './main.styled.ts';
import { MultiStepForm } from './components/form/MultiStepForm/MultiStepForm.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledContainer>
      <MultiStepForm />
    </StyledContainer>
  </StrictMode>
);
