import React from "react";
import HowItWorks from "../../../Component/HowItWorks/HowItWorks";

const HowRideWorks = () => {
    return (
        <>
            <HowItWorks
                step1="Choose Destination"
                step2="Find Car"
                step3="Book Trip"
                step4={`Let's Go`}
            />
        </>
    );
};

export default HowRideWorks;
