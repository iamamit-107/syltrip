import React from "react";
import "./JhotpotService.scss";

import service1 from "../../../images/jhotpot/service1.png";
import service2 from "../../../images/jhotpot/service2.png";
import service3 from "../../../images/jhotpot/service3.png";
import service4 from "../../../images/jhotpot/service4.png";

const JhotpotService = () => {
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
                            <h3>Grocery Delivery Service</h3>
                            <p>
                                Get your daily grocery items from your local
                                shops instantly within your budget. Find 1,000's
                                of products from the stores you already shop at.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src={service2} className="img-fluid" alt="" />
                            <h3>Food delivery service</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Non, commodo, duis sed id
                                pellentesque dui sit ornare. Mi sit nam products
                                from the stores you already shop at.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src={service3} className="img-fluid" alt="" />
                            <h3>Medicine delivery service</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sit platea egestas tincidunt
                                neque, dictumst. Nisi auctor erat non susp
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <img src={service4} className="img-fluid" alt="" />
                            <h3>Laundry service</h3>
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

export default JhotpotService;
