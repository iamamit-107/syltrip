import React from "react";
import CommonCounter from "../../../Component/CommonCounter/CommonCounter";

const OtaCounter = () => {
    const counter1 = "1.2";
    const counter2 = "20000";
    const counter3 = "4000";
    const suffix = "Lacs+";
    return (
        <>
            <CommonCounter
                count1={counter1}
                count2={counter2}
                count3={counter3}
                suffix={suffix}
                count2Text="Registered Hotel"
                count3Text="Trips"
                suffix2="+"
            />
        </>
    );
};

export default OtaCounter;
