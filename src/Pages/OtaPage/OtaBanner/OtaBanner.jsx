import React from "react";
import CommonBanner from "../../../Component/CommonBanner/CommonBanner";

import logo from "../../../images/ota/logo.png";
import bg from "../../../images/ota/bannerBg.png";

const OtaBanner = () => {
    const header = "It’s time change the";
    const headerBold = "Ride Experience";
    const desc = "Greater Comfort, Stronger performance, Improved safetty.";
    return (
        <CommonBanner
            bg={bg}
            logo={logo}
            header={header}
            headerBold={headerBold}
            desc={desc}
        />
    );
};

export default OtaBanner;
