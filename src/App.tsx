import React, { useState } from "react";
import Display from "./components/display";
import Pad from "./components/pad";

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

const App: React.FC = () => {
    const [result, setResult] = useState<string>(""); //result

    const operator = ["+", "-", "*", "/", "."];

    //AC
    const onAllClear = () => {
        setResult("");
    };

    //CE
    const onClickRemove = () => {
        if (result !== "0" && result.length > 1) {
            setResult(result.slice(0, -1));
        } else if (result.length === 1) {
            setResult("0");
        }
    };

    //+/-
    const onChangeSign = () => {
        setResult((prevResult) => {
            const newResult = parseFloat(prevResult) * -1;
            return newResult.toString();
        });
    };

    //.
    const onClickDot = () => {
        if (result.indexOf(".") === -1) {
            setResult(result + ".");
        }
        if (result === "") {
            setResult("0.");
        }
    };

    //=
    const onClickEqual = () => {
        let index = 3;
        let newResult = Number(eval(result)).toFixed(index).toString();
        if (newResult.includes(".000")) {
            newResult = newResult.slice(0, -4);
        }
        try {
            setResult(newResult);
        } catch (e) {
            setResult("Error");
        }
    };

    const onClickButton = (buttonType: button) => {
        if (
            (operator.includes(buttonType) && result === "") ||
            (operator.includes(buttonType) &&
                operator.includes(result.slice(-1)))
        ) {
            return;
        }

        setResult(result?.concat(buttonType));
        // if (
        //     (buttonType === "+" ||
        //         buttonType === "-" ||
        //         buttonType === "*" ||
        //         buttonType === "/") &&
        //     (result[0] === "+" ||
        //         result[0] === "-" ||
        //         result[0] === "*" ||
        //         result[0] === "/")
        // ) {
        //     setResult(result[0]?.replace(buttonType, "0").concat(buttonType));
        // } else {
        //     setResult(result?.concat(buttonType));
        // }
    };

    return (
        <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
            <div className="w-80 duration-500 sm:w-96">
                <Display value={result} />
                <Pad
                    onAllClear={onAllClear}
                    onChangeSign={onChangeSign}
                    onClickDot={onClickDot}
                    onClickEqual={onClickEqual}
                    onClickButton={onClickButton}
                    onClickRemove={onClickRemove}
                />
            </div>
        </div>
    );
};

export default App;
