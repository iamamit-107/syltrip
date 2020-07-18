import React from "react";

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

const BookTrucker = () => {
    return (
        <div id="car-for-occation">
            <div className="container">
                {/* breadcrumb component */}
                <Breadcrumb next="Trucker365" />

                {/* texts */}
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="heading">
                            <h1>Book Truck faster than ever</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vehicula et tellus ornare
                                mattis id sed lorem. Commodo cursus et hendrerit
                                diam, cras in. Nulla vitae mi consequat, elit
                                accumsan. Penatibus sed volutpat vivamus arcu.
                                Fringilla tellus ullamcorper varius nec
                                praesent.
                            </p>
                        </div>
                        <div className="icon-text">
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Office/Commercial Move
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Id eget phasellus a quam donec
                                tincidunt. Commodo amet urna lectus sed velit
                                purus, habitant posuere massa.
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
                                Home Move Service
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In leo leo eu, leo. Turpis quam
                                fringilla ultricies lectus ornare cras quis.
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
                                Product Delivery Service
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Id neque vitae et morbi lectus
                                dapibus accumsan. Nulla semper libero, leo urna
                                risus arcu quis nulla tristique.
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

export default BookTrucker;
