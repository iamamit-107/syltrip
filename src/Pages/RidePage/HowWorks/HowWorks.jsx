import React from "react";
import "./HowWorks.scss";

import polygonBg from "../../../images/ride/Polygon-bg.png";
import line from "../../../images/ride/line.png";

const HowWorks = () => {
    return (
        <div id="how-works">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="title pb-3">How It Works</h1>
                    </div>
                    <div
                        className="row line-bg"
                        style={{ backgroundImage: `url(${line})` }}
                    >
                        <div
                            className="col-lg-3 col-md-6 polygon-bg"
                            style={{ backgroundImage: `url(${polygonBg})` }}
                        >
                            <h1>1</h1>
                            <p>Choose Destination</p>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 polygon-bg"
                            style={{ backgroundImage: `url(${polygonBg})` }}
                        >
                            <h1>2</h1>
                            <p>Find Car</p>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 polygon-bg"
                            style={{ backgroundImage: `url(${polygonBg})` }}
                        >
                            <h1>3</h1>
                            <p>Book Trip</p>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 polygon-bg"
                            style={{ backgroundImage: `url(${polygonBg})` }}
                        >
                            <h1>4</h1>
                            <p>Let's Go</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWorks;
