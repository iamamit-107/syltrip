import React from "react";
import CountUp from "react-countup";

import "./Counter.scss";

const Counter = () => {
    return (
        <div id="counter">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-10">
                        <div className="row counter-inner">
                            <div className="col-md-4">
                                <h1>
                                    <CountUp end={120000} suffix="+" />
                                </h1>
                                <p>App User</p>
                            </div>
                            <div className="col-md-4">
                                <h1>
                                    <CountUp end={20000} suffix="+" />
                                </h1>
                                <p>Registered Vehicle</p>
                            </div>
                            <div className="col-md-4">
                                <h1>
                                    <CountUp end={400000} suffix="+" />
                                </h1>
                                <p>Order/Ride</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
