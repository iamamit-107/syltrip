import React from "react";
import "./CarForOccation.scss";

import icon from "../../../images/right.png";
import phoneBg from "../../../images/phone-bg.png";
import phone from "../../../images/phone.png";
import dollar from "../../../images/ride/dollar-icon.png";
import right from "../../../images/ride/right-icon.png";
import star from "../../../images/ride/star-icon.png";
import mobile from "../../../images/ride/mobile-icon.png";
import map from "../../../images/ride/map-icon.png";
import path from "../../../images/ride/path-icon.png";
import timer from "../../../images/ride/timer-icon.png";
import Breadcrumb from "../../../Component/Breadcrumb/Breadcrumb";
import PhoneCarousel from "../../../Component/PhoneCarousel/PhoneCarousel";

const CarForOccation = () => {
    return (
        <div id="car-for-occation">
            <div className="container">
                {/* breadcrumb component */}
                <Breadcrumb next="Syltrips Ride" />

                {/* texts */}
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="heading">
                            <h1>A car for every occation</h1>
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
                                City Area
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo aliquid quidem, debitis
                                totam cum atque consectetur. Maxime eaque unde
                                illo.
                            </p>
                            <div className="icon-box">
                                <p>
                                    <span>
                                        <img src={dollar} alt="" />
                                    </span>
                                    Budget Friendly
                                </p>
                                <p>
                                    <span>
                                        <img src={star} alt="" />
                                    </span>
                                    Best Driver
                                </p>
                                <p>
                                    <span>
                                        <img src={right} alt="" />
                                    </span>
                                    Safe ride
                                </p>
                            </div>
                        </div>
                        <div className="icon-text">
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Outstation
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo aliquid quidem, debitis
                                totam cum atque consectetur. Maxime eaque unde
                                illo.
                            </p>
                            <div className="icon-box">
                                <p>
                                    <span>
                                        <img src={map} alt="" />
                                    </span>
                                    One way trip
                                </p>
                                <p>
                                    <span>
                                        <img src={mobile} alt="" />
                                    </span>
                                    Advanced Booking
                                </p>
                                <p>
                                    <span>
                                        <img src={right} alt="" />
                                    </span>
                                    Safe ride
                                </p>
                            </div>
                        </div>
                        <div className="icon-text" style={{ border: "none" }}>
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Rental/Marketplace
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo aliquid quidem, debitis
                                totam cum atque consectetur. Maxime eaque unde
                                illo.
                            </p>
                            <div className="icon-box">
                                <p>
                                    <span>
                                        <img src={timer} alt="" />
                                    </span>
                                    Hourly Packages
                                </p>
                                <p>
                                    <span>
                                        <img src={path} alt="" />
                                    </span>
                                    Multiple Stops
                                </p>
                                <p>
                                    <span>
                                        <img src={star} alt="" />
                                    </span>
                                    Best Drivers
                                </p>
                            </div>
                        </div>
                        <button
                            className="btn btn-download"
                            style={{
                                backgroundColor: "#9507B2",
                                borderRadius: "15px",
                                color: "#fff",
                                padding: "10px 20px",
                                marginTop: "30px",
                            }}
                        >
                            Learn More
                            <i class="fas fa-chevron-right pl-3"></i>
                        </button>
                    </div>

                    {/* phone carousel right */}
                    <PhoneCarousel />
                </div>
            </div>
        </div>
    );
};

export default CarForOccation;
