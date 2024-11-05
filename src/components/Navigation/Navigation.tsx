import {navPages} from "../../global/data.ts";
import {FC} from "react";
import {
    Nav, NavUl, NavLi,
    NavNumberItemCircle,
    NavDesktopDetails, NavStepNumber, NavStepLabel, NavButton
} from "./Navigation.styled.ts";

type navigationProps = {
    pageCount: number;
    goTo: (i: number) => void;
    currentStepIndex: number;
}

export const Navigation: FC<navigationProps> = ({pageCount, goTo, currentStepIndex}) => (
    <Nav>
        <NavUl>
            {Array.from({length: pageCount}, (_, i) => (
                <NavLi key={i}>
                    <NavButton onClick={() => goTo(i)} type="button">
                        <NavNumberItemCircle isActive={i === currentStepIndex}>{i + 1}</NavNumberItemCircle>
                        <NavDesktopDetails>
                            <NavStepNumber>STEP {i + 1}</NavStepNumber>
                            <NavStepLabel>{navPages[i]}</NavStepLabel>
                        </NavDesktopDetails>
                    </NavButton>
                </NavLi>
            ))}
        </NavUl>
    </Nav>
);