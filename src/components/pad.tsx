import React from "react";
import Button from "./button";

type button =
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "+"
    | "-"
    | "*"
    | "/"
    | "."
    | "%";
interface Props {
    onAllClear: () => void;
    onChangeSign: () => void;
    onClickDot: () => void;
    onClickEqual: () => void;
    onClickButton: (buttonType: button) => void;
}
const Pad: React.FC<Props> = ({
    onAllClear,
    onChangeSign,
    onClickDot,
    onClickEqual,
    onClickButton,
}) => {
    const buttons = [
        {
            name: "AC",
            color: "red",
            onClick: onAllClear,
        },
        {
            name: "%",
            onClick: onChangeSign,
        },
        {
            name: "-/+",
            onClick: () => onChangeSign(),
        },
        {
            name: "÷",
            color: "dark",
            onClick: () => onClickButton("/"),
        },
        {
            name: "7",
            onClick: () => onClickButton("7"),
        },
        {
            name: "8",
            onClick: () => onClickButton("8"),
        },
        {
            name: "9",
            onClick: () => onClickButton("9"),
        },
        {
            name: "×",
            color: "dark",
            onClick: () => onClickButton("*"),
        },
        {
            name: "4",
            onClick: () => onClickButton("4"),
        },
        {
            name: "5",
            onClick: () => onClickButton("5"),
        },
        {
            name: "6",
            onClick: () => onClickButton("6"),
        },
        {
            name: "-",
            color: "dark",
            onClick: () => onClickButton("-"),
        },

        {
            name: "1",
            onClick: () => onClickButton("1"),
        },
        {
            name: "2",
            onClick: () => onClickButton("2"),
        },
        {
            name: "3",
            onClick: () => onClickButton("3"),
        },
        {
            name: "+",
            color: "dark",
            onClick: () => onClickButton("+"),
        },
        {
            name: "0",
            onClick: () => onClickButton("0"),
        },
        {
            name: ".",
            onClick: onClickDot,
        },
        {
            name: "=",
            color: "green",
            isEqual: true,
            onClick: onClickEqual,
        },
    ];

    return (
        <div className="grid grid-cols-4">
            {buttons.map((button, index) => {
                return (
                    <Button
                        key={index}
                        color={button.color}
                        isEqual={button.isEqual}
                        onClick={button.onClick}
                        name={button.name}
                    >
                        {button.name}
                    </Button>
                );
            })}
        </div>
    );
};

export default Pad;
