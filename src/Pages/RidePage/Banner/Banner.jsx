import React from "react";
import "./Banner.scss";

import bannerLogo from "../../../images/ride/ride-banner-logo.png";
import bannerBg from "../../../images/ride/ride-bg.png";

const Banner = () => {
    return (
        <div id="banner" style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="overlay">
                <div className="container">
                    <div className="row align-items-center d-flex">
                        <div className="col-xl-4 text-area">
                            <img src={bannerLogo} alt="" />
                            <h1>
                                It’s time change the
                                <span className="bold"> Ride Experience</span>
                            </h1>
                            <p>
                                Greater Comfort, Stronger performance, Improved
                                safetty.
                            </p>
                            <button
                                className="btn btn-download"
                                style={{ marginTop: "20px" }}
                                type="submit"
                            >
                                Download App
                                <i class="fas fa-chevron-right pl-3"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
