import React from "react";
interface Props {
    value: string;
}
const Display: React.FC<Props> = ({ value }) => {
    return (
        <div className={"bg-[#393939] p-5"}>
            <div
                className={
                    "flex justify-end text-white text-2xl overflow-hidden items-center min-h-[2rem]"
                }
            >
                {value ? value : "0"}
            </div>
        </div>
    );
};

export default Display;
