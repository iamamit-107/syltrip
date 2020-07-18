import React from "react";

import CommonCounter from "../../../Component/CommonCounter/CommonCounter";

const Counter = () => {
    const counter1 = "120000";
    const counter2 = "20000";
    const counter3 = "400000";
    return (
        <>
            <CommonCounter
                count1={counter1}
                count2={counter2}
                count3={counter3}
            />
        </>
    );
};

export default Counter;
