import React from "react";
import "./WhySection.scss";

import why1 from "../../images/ride/why1.png";
import why2 from "../../images/ride/why2.png";
import why3 from "../../images/ride/why3.png";
import line from "../../images/ride/line2.png";

const ImageBox = () => {
    return (
        <div className="row box-shadow">
            <div className="col-xl-6">
                <div className="box">
                    <div className="img">
                        <img src={why1} alt="" className="" />
                    </div>
                    <div className="text-box">
                        <h1>Get Super fast Service</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Diam commodo curabitur tristique integer purus
                            suscipit eget in.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Diam commodo curabitur tristique integer purus
                            suscipit eget in.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Diam commodo curabitur tristique integer purus
                            suscipit eget in.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Diam commodo curabitur tristique integer purus
                            suscipit eget in.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Diam commodo curabitur tristique integer purus
                            suscipit eget in.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Diam commodo curabitur tristique integer purus
                            suscipit eget in.
                        </p>
                        <img src={line} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageBox;
