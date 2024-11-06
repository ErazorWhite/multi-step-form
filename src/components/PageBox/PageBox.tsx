import {PageBoxDescription, PageBoxHeading} from "./PageBox.styled.ts";
import {FC, ReactNode} from "react";

interface IPageBox {
    headerText: string;
    descriptionText: string;
    children: ReactNode;
}
export const PageBox: FC<IPageBox> = ({headerText, descriptionText, children}) => {
    return (
        <>
            <PageBoxHeading>{headerText}</PageBoxHeading>
            <PageBoxDescription>{descriptionText}</PageBoxDescription>
            {children}
        </>
    )
}
