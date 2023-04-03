import { ReactNode } from 'react';

type ButtonType = "primary" | "link";
interface ButtonProps {
    children?: React.ReactNode;
    htmlType?: "button" | "submit" | "reset";
    type?: ButtonType;
    width?: string;
    block?: boolean;
    padding?: string;
    loading?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    minheight?: number;
    minwidth?: number;
    boxshadow?: string;
    background?: string;
    borderradius?: string;
    noradius?: boolean;
    typography?: any;
    color?: string;
    fontSize?: string;
    bold?: boolean;
    margin?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    bordercolor?: string;
}
declare const ButtonComponent: React.FC<ButtonProps>;

export { ButtonComponent, ButtonProps };
