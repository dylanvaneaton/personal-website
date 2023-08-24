import { Button } from "antd";
import { ReactNode } from "react";

interface DylanButtonProps{
    children: ReactNode;
    buttonTo: string;
    dashed: boolean;

}

export function DylanButton({children, buttonTo, dashed}: DylanButtonProps) {
    return(
    <Button href={buttonTo} type={dashed ? "dashed" : "default"}>{children}</Button>
    )
}