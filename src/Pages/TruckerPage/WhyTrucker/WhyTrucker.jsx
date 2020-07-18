import React from "react";
import WhySection from "../../../Component/WhySection/WhySection";

const WhyTrucker = () => {
    const header = "Why Use Trucker";
    const desc =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam commodo curabitur tristique integer purus suscipit eget in.";
    return (
        <>
            <WhySection heading={header} desc={desc} />
        </>
    );
};

export default WhyTrucker;
