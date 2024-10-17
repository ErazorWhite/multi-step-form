import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {StyledContainer} from "./main.styled.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledContainer>
    </StyledContainer>
  </StrictMode>,
)
