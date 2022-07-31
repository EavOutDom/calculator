import React from "react";
import Button from "./button";

type digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type operator = "+" | "-" | "×" | "÷";
interface Props {
    onClickDigit: (digit: digit) => void;
    onAllClear: () => void;
    onClearEntry: () => void;
    onClickOperator: (operator: operator) => void;
    onChangeSign: () => void;
    onClickDot: () => void;
    onClickEqual: () => void;
}
const Pad: React.FC<Props> = ({
    onClickDigit,
    onAllClear,
    onClearEntry,
    onClickOperator,
    onChangeSign,
    onClickDot,
    onClickEqual,
}) => {
    const buttons = [
        {
            name: "AC",
            color: "red",
            onClick: onAllClear,
        },
        {
            name: "C",
            onClick: onClearEntry,
        },
        {
            name: "-/+",
            onClick: () => onChangeSign(),
        },
        {
            name: "÷",
            color: "dark",
            onClick: () => onClickOperator("÷"),
        },
        {
            name: "7",
            onClick: () => onClickDigit(7),
        },
        {
            name: "8",
            onClick: () => onClickDigit(8),
        },
        {
            name: "9",
            onClick: () => onClickDigit(9),
        },
        {
            name: "×",
            color: "dark",
            onClick: () => onClickOperator("×"),
        },
        {
            name: "4",
            onClick: () => onClickDigit(4),
        },
        {
            name: "5",
            onClick: () => onClickDigit(5),
        },
        {
            name: "6",
            onClick: () => onClickDigit(6),
        },
        {
            name: "-",
            color: "dark",
            onClick: () => onClickOperator("-"),
        },

        {
            name: "1",
            onClick: () => onClickDigit(1),
        },
        {
            name: "2",
            onClick: () => onClickDigit(2),
        },
        {
            name: "3",
            onClick: () => onClickDigit(3),
        },
        {
            name: "+",
            color: "dark",
            onClick: () => onClickOperator("+"),
        },
        {
            name: "0",
            onClick: () => onClickDigit(0),
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
                    >
                        {button.name}
                    </Button>
                );
            })}
        </div>
    );
};

export default Pad;
