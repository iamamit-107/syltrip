import React from "react";
import CommonCounter from "../../../Component/CommonCounter/CommonCounter";

const JhotpotCounter = () => {
    const counter1 = "1.2";
    const counter2 = "20000";
    const counter3 = "4";
    const suffix = "Lacs+";
    return (
        <>
            <CommonCounter
                count1={counter1}
                count2={counter2}
                count3={counter3}
                suffix={suffix}
                count2Text="20000+ Registered service provider"
            />
        </>
    );
};

export default JhotpotCounter;
