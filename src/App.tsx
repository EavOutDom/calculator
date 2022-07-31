import React, { useState } from "react";
import Display from "./components/display";
import Pad from "./components/pad";

type digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type operator = "+" | "-" | "×" | "÷";

const App: React.FC = () => {
    const [display, setDisplay] = useState<string>("0");
    const [isWaiting, setIsWaiting] = useState<boolean>(true); // true if the user has just pressed an operator
    const [pendingOperator, setPendingOperator] = useState<operator>(); // undefined
    const [result, setResult] = useState<number>(0); //result

    //AC
    const onAllClear = () => {
        setDisplay("0");
        setResult(0);
        setPendingOperator(undefined);
        setIsWaiting(true);
    };

    //C
    const onClearEntry = () => {
        setDisplay("0");
        setIsWaiting(true);
    };

    //1->9
    const onClickDigit = (digit: digit) => {
        let newDisplay = display;
        if (display === "0") {
            newDisplay = digit.toString();
        } else {
            newDisplay += digit.toString();
        }
        setDisplay(newDisplay);
    };

    //+/-
    const onChangeSign = () => {
        let newDisplay = display;
        if (display === "0") {
            newDisplay = "-0";
        } else if (display[0] === "-") {
            newDisplay = display.slice(1);
        } else {
            newDisplay = "-" + display;
        }
        setDisplay(newDisplay);
    };

    const calculate = (rightOperand: number, pendingOperator: operator): boolean => {
        let newResult = result
    
        switch (pendingOperator) {
          case '+':
            newResult += rightOperand
            break
          case '-':
            newResult -= rightOperand
            break
          case '×':
            newResult *= rightOperand
            break
          case '÷':
            if (rightOperand === 0) {
              return false
            }
    
            newResult /= rightOperand
        }
    
        setResult(newResult)
        setDisplay(newResult.toString().toString().slice(0, 12))
    
        return true
      }
    
    //+ - x ÷
    const onClickOperator = (operator: operator) => {
        let operand = Number(display);
        if (typeof pendingOperator !== "undefined" && !isWaiting) {
            if (!calculate(operand, pendingOperator)) {
                return;
            }
        } else {
            setResult(operand);
            // console.log(result);
        }
        setPendingOperator(operator);
        setIsWaiting(true);
    };

    //.
    const onClickDot = () => {
        if (!display.includes(".")) {
            setDisplay(display + ".");
        }
    };

    //=
    const onClickEqual = () => {
        let operand = Number(display);
        if (typeof pendingOperator !== "undefined" && !isWaiting) {
            if (!calculate(operand, pendingOperator)) {
                return;
            }
            setPendingOperator(undefined);
        } else {
            setDisplay(result.toString());
        }
        setResult(operand);
        setIsWaiting(true);
    };

    return (
        <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
            <div className="w-80 duration-500 sm:w-96">
                <Display
                    value={display}
                    expression={
                        typeof pendingOperator !== "undefined"
                            ? `${result} ${pendingOperator} ${
                                  isWaiting ? " " : display
                              }`
                            : " "
                    }
                />
                <Pad
                    onClickDigit={onClickDigit}
                    onAllClear={onAllClear}
                    onClearEntry={onClearEntry}
                    onClickOperator={onClickOperator}
                    onChangeSign={onChangeSign}
                    onClickDot={onClickDot}
                    onClickEqual={onClickEqual}
                />
            </div>
        </div>
    );
};

export default App;
