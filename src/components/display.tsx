import React from "react";
interface Props {
    value: string;
}
const Display: React.FC<Props> = ({ value }) => {
    return (
        <div className={"bg-[#393939] p-5"}>
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
