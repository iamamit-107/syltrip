import React from "react";
import CommonBanner from "../../../Component/CommonBanner/CommonBanner";

import bg from "../../../images/jhotpot/bannerBg.png";
import logo from "../../../images/jhotpot/logo.png";

const JhotpotBanner = () => {
    const header = "Get any services to";
    const headerBold = "your door in fastest time";
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

export default JhotpotBanner;
