import React from "react";
import "./download.scss";

import google from "../../../images/google.png";
import apple from "../../../images/apple.png";
import duelPhone from "../../../images/duelPhone2.png";

const Download = () => {
    return (
        <div id="download">
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-lg-10"
                        style={{
                            backgroundColor: " #F9F1FF",
                            borderRadius: "20px",
                        }}
                    >
                        <div className="row px-5 ">
                            <div className="col-xl-6 py-5 d-flex align-items-center text-sm-center text-lg-left">
                                <div>
                                    <h1 className="title">Download Our apps</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Similique, et.
                                    </p>
                                    <a className="btn icon-btn" href="/">
                                        <img
                                            src={google}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <a className="btn icon-btn" href="/">
                                        <img
                                            src={apple}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <img
                                    src={duelPhone}
                                    className="img-fluid download-mobile"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;
