import React from "react";

import bg from "../../../images/trucker/bannerBg.png";
import logo from "../../../images/trucker/logo.png";
import CommonBanner from "../../../Component/CommonBanner/CommonBanner";

const TruckerBanner = () => {
    const header = "Fastest Truck Booking";
    const headerBold = "In Bangladesh";
    const desc = "Greater Comfort, Stronger performance, Improved safetty.";
    return (
        <>
            <CommonBanner
                header={header}
                headerBold={headerBold}
                desc={desc}
                bg={bg}
                logo={logo}
            />
        </>
    );
};

export default TruckerBanner;
