import React from "react";
import "./HowItWorks.scss";

import polygonBg from "../../images/ride/Polygon-bg.png";
import line from "../../images/ride/line.png";

const HowItWorks = ({ step1, step2, step3, step4 }) => {
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
                            <p> {step1} </p>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 polygon-bg"
                            style={{ backgroundImage: `url(${polygonBg})` }}
                        >
                            <h1>2</h1>
                            <p> {step2} </p>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 polygon-bg"
                            style={{ backgroundImage: `url(${polygonBg})` }}
                        >
                            <h1>3</h1>
                            <p> {step3} </p>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 polygon-bg"
                            style={{ backgroundImage: `url(${polygonBg})` }}
                        >
                            <h1>4</h1>
                            <p> {step4} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
