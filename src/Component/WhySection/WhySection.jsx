import React from "react";
import "./WhySection.scss";

import why1 from "../../images/ride/why1.png";
import why2 from "../../images/ride/why2.png";
import why3 from "../../images/ride/why3.png";
import line from "../../images/ride/line2.png";

const WhySection = () => {
    return (
        <div id="why-section">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-12 text-center">
                        <h1 className="title mb-3">Why Syltrips Ride</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Diam commodo curabitur tristique integer purus
                            suscipit eget in.
                        </p>
                    </div>
                </div>
                <div className="row box-shadow">
                    <div className="col-xl-6">
                        <div className="box">
                            <div className="img">
                                <img src={why1} alt="" className="" />
                            </div>
                            <div className="text-box">
                                <h1>Get Super fast Service</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Diam commodo curabitur
                                    tristique integer purus suscipit eget in.
                                </p>
                                <img src={line} alt="" />
                            </div>
                        </div>

                        <div className="box">
                            <div className="img">
                                <img src={why2} alt="" className="" />
                            </div>
                            <div className="text-box">
                                <h1>Get Super fast Service</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Diam commodo curabitur
                                    tristique integer purus suscipit eget in.
                                </p>
                                <img src={line} alt="" />
                            </div>
                        </div>

                        <div className="box">
                            <div className="img">
                                <img src={why1} alt="" className="" />
                            </div>
                            <div className="text-box">
                                <h1>Get Super fast Service</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Diam commodo curabitur
                                    tristique integer purus suscipit eget in.
                                </p>
                                <img src={line} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="box">
                            <div className="img">
                                <img src={why1} alt="" className="" />
                            </div>
                            <div className="text-box">
                                <h1>Get Super fast Service</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Diam commodo curabitur
                                    tristique integer purus suscipit eget in.
                                </p>
                                <img src={line} alt="" />
                            </div>
                        </div>

                        <div className="box">
                            <div className="img">
                                <img src={why3} alt="" className="" />
                            </div>
                            <div className="text-box">
                                <h1>Get Super fast Service</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Diam commodo curabitur
                                    tristique integer purus suscipit eget in.
                                </p>
                                <img src={line} alt="" />
                            </div>
                        </div>

                        <div className="box">
                            <div className="img">
                                <img src={why2} alt="" className="" />
                            </div>
                            <div className="text-box">
                                <h1>Get Super fast Service</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Diam commodo curabitur
                                    tristique integer purus suscipit eget in.
                                </p>
                                <img src={line} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
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
    );
};

export default WhySection;
