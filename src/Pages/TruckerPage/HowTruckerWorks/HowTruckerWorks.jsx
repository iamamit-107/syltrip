import React from "react";
import HowItWorks from "../../../Component/HowItWorks/HowItWorks";

const HowTruckerWorks = () => {
    return (
        <>
            <HowItWorks
                step1="Select Service"
                step2="Find Truck"
                step3="Get Quote"
                step4={`Let's Go`}
            />
        </>
    );
};

export default HowTruckerWorks;
