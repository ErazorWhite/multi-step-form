import {navPages} from "../../global/data.ts";
import {FC} from "react";
import {
    Nav, NavUl,
    NavNumberItemCircle,
    NavDesktopDetails, NavStepNumber, NavStepLabel, NavButton
} from "./Navigation.styled.ts";

type navigationProps = {
    pageCount: number;
    goTo: (i: number) => void;
    currentStepIndex: number;
    isValid: boolean;
}

export const Navigation: FC<navigationProps> = ({pageCount, goTo, currentStepIndex, isValid}) => (
    <Nav>
        <NavUl>
            {Array.from({length: pageCount}, (_, i) => (
                <li key={i}>
                    <NavButton onClick={() => goTo(i)} type="button" disabled={!isValid}>
                        <NavNumberItemCircle isActive={i === currentStepIndex}>{i + 1}</NavNumberItemCircle>
                        <NavDesktopDetails>
                            <NavStepNumber>STEP {i + 1}</NavStepNumber>
                            <NavStepLabel>{navPages[i]}</NavStepLabel>
                        </NavDesktopDetails>
                    </NavButton>
                </li>
            ))}
        </NavUl>
    </Nav>
);