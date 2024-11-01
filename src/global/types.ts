import {ReactNode} from "react";
import {iconColors} from "./data.ts";

export interface IAddon {
    label: string;
    value: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    currency: string;
}

export interface IPlan {
    label: string;
    value: string;
    monthlyPrice: number;
    yearlyPrice: number;
    currency: string;
    color: iconColors;
    icon: ReactNode;
}