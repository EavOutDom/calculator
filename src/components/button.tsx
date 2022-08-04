import React from "react";

interface Props {
    children?: JSX.Element | JSX.Element[] | string | string[];
    onClick?: () => void;
    color?: string;
    isEqual?: boolean;
    name?: string;
}
const Button: React.FC<Props> = ({ children, onClick, color, isEqual, name }) => {
    return (
        <button
            name="name"
            onClick={onClick}
            className={`${
                color === "red"
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : color === "dark"
                    ? "bg-[#272727] text-[#c5830d] hover:bg-black"
                    : color === "green"
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-[#2e2e2e] text-white hover:bg-black"
            } ${isEqual ? "col-span-2" : ""} w-full h-16 text-xl font-semibold`}
        >
            {children}
        </button>
    );
};

export default Button;
