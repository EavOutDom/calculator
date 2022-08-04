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
    const [result, setResult] = useState<string>("0"); //result

    //AC
    const onAllClear = () => {
        setResult("0");
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
        if (!result.includes(".")) {
            setResult(result + ".");
        }
    };

    //=
    const onClickEqual = () => {
        let index = 3;
        let newResult = Number(eval(result)).toFixed(index).toString();
        if (index > 3) {
            newResult = Number(eval(result)).toFixed(index).toString();
        } else {
            newResult = Number(eval(result)).toString();
        }
        try {
            setResult(newResult);
        } catch (e) {
            setResult("Error");
        }
    };

    const onClickButton = (buttonType: button) => {
        if (result === "0") {
            setResult(buttonType);
        } else {
            setResult(result?.concat(buttonType));
        }
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
                />
            </div>
        </div>
    );
};

export default App;
