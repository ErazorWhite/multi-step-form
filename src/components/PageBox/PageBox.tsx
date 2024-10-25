import {PageBoxDescription, PageBoxHeading} from "./PageBox.styled.ts";
import {ReactNode} from "react";

interface IPageBox {
    headerText: string;
    descriptionText: string;
    children: ReactNode;
}
export const PageBox = ({headerText, descriptionText, children}: IPageBox) => {
    return (
        <>
            <PageBoxHeading>{headerText}</PageBoxHeading>
            <PageBoxDescription>{descriptionText}</PageBoxDescription>
            {children}
        </>
    )
}
