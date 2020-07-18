import React from "react";
import CountUp from "react-countup";

import "./CommonCounter.scss";

const CommonCounter = ({
    count1,
    count2,
    count3,
    suffix,
    suffix2,
    count2Text,
    count3Text,
}) => {
    return (
        <div id="counter">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-10">
                        <div className="row counter-inner">
                            <div className="col-md-4">
                                <h1>
                                    <CountUp
                                        end={count1}
                                        suffix={suffix ? suffix : "+"}
                                    />
                                </h1>
                                <p>App User</p>
                            </div>
                            <div className="col-md-4">
                                <h1>
                                    <CountUp end={count2} suffix="+" />
                                </h1>
                                <p>
                                    {" "}
                                    {count2Text
                                        ? count2Text
                                        : "Registered Vehicle"}{" "}
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h1>
                                    {suffix2 ? (
                                        <CountUp
                                            end={count3}
                                            suffix={suffix2 ? suffix2 : "+"}
                                        />
                                    ) : (
                                        <CountUp
                                            end={count3}
                                            suffix={suffix ? suffix : "+"}
                                        />
                                    )}
                                </h1>
                                <p>
                                    {" "}
                                    {count3Text
                                        ? count3Text
                                        : "Order/Ride"}{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonCounter;
