import React from "react";

import service1 from "../../../images/ota/service1.png";
import service2 from "../../../images/ota/service2.png";
import service3 from "../../../images/ota/service3.png";

const OtaService = () => {
    return (
        <>
            <div id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="title">Our On-demand Services</h1>
                        </div>

                        <div className="col-lg-3 col-md-6 text-center">
                            <img src={service1} className="img-fluid" alt="" />
                            <h3>Online ticket purchase</h3>
                            <p>
                                Buy your bus/train/launch ticket very easily by
                                syltrips OTA online ticket purchase system in a
                                minute. Choose from more than 100 providers.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src={service2} className="img-fluid" alt="" />
                            <h3>Hotel Reservation</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Non, commodo, duis sed id
                                pellentesque dui sit ornare. Mi sit nam mauris
                                phasellus lacus.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src={service3} className="img-fluid" alt="" />
                            <h3>Tour Packedges</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sit platea egestas tincidunt
                                neque, dictumst. Nisi auctor erat non
                                suspendisse posuere eu lectus mi tristique.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src={service1} className="img-fluid" alt="" />
                            <h3>Rent-a-tourbus</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Gravida sagittis diam at sed.
                                Aliquam sed bibendum sed volutpat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtaService;
