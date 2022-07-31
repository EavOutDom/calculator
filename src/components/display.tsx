import React from "react";
interface Props {
    value: string;
    expression: string;
}
const Display: React.FC<Props> = ({ value, expression }) => {
    return (
        <div className={"bg-[#393939] p-5"}>
            <div className={"flex justify-end my-2 text-[#c5830d]"}>
                {expression}
            </div>
            <div
                className={
                    "flex justify-end text-white text-2xl overflow-hidden min-h-[1.5rem] items-center"
                }
            >
                {value}
            </div>
        </div>
    );
};

export default Display;
