import React from "react";
import "./SyltripRide.scss";

import icon from "../../../images/right.png";
import phoneBg from "../../../images/phone-bg.png";
import phone from "../../../images/phone.png";

const SyltripRide = () => {
    return (
        <div id="syltrip-ride">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="heading">
                            <h1>Syltrips Ride</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Sequi, quod hic.
                                Exercitationem, culpa dolores est tempore magni
                                labore, minima mollitia neque in tempora
                                recusandae pariatur expedita illum excepturi sit
                                natus?
                            </p>
                        </div>
                        <div className="icon-text">
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Get Super Fast Service
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo aliquid quidem, debitis
                                totam cum atque consectetur. Maxime eaque unde
                                illo.
                            </p>
                        </div>
                        <div className="icon-text">
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Get Super Fast Service
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo aliquid quidem, debitis
                                totam cum atque consectetur. Maxime eaque unde
                                illo.
                            </p>
                        </div>
                        <div className="icon-text">
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Get Super Fast Service
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo aliquid quidem, debitis
                                totam cum atque consectetur. Maxime eaque unde
                                illo.
                            </p>
                        </div>
                        <button className="btn btn-download">
                            Learn More
                            <i class="fas fa-chevron-right pl-3"></i>
                        </button>
                    </div>
                    <div
                        className="col-lg-5 offset-lg-1 phone-bg"
                        style={{ backgroundImage: `url(${phoneBg})` }}
                    >
                        <div
                            id="carouselExampleSlidesOnly"
                            class="carousel slide"
                            data-ride="carousel"
                        >
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img
                                        src={phone}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src={phone}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div class="carousel-item">
                                    <img
                                        src={phone}
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <img src={phone} className="img-fluid" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SyltripRide;
