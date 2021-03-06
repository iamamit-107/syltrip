import React from "react";
import "./Banner.scss";

import bannerLogo from "../../../images/ride/ride-banner-logo.png";
import bannerBg from "../../../images/ride/ride-bg.png";
import CommonBanner from "../../../Component/CommonBanner/CommonBanner";

const Banner = () => {
    const header = "It’s time change the";
    const headerBold = "Ride Experience";
    const desc = "Greater Comfort, Stronger performance, Improved safetty.";
    return (
        <>
            <CommonBanner
                bg={bannerBg}
                logo={bannerLogo}
                header={header}
                headerBold={headerBold}
                desc={desc}
            />
        </>
    );
};

export default Banner;
