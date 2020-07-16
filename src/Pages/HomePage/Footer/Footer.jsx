import React from "react";
import "./Footer.scss";

import footerBg from "../../../images/footerBg.png";
import logo from "../../../images/logoTransparent.png";
import icon1 from "../../../images/footerIcon1.png";
import icon2 from "../../../images/footerIcon2.png";
import icon3 from "../../../images/footerIcon3.png";

import google from "../../../images/google.png";
import apple from "../../../images/apple.png";

const Footer = () => {
    return (
        <>
            <div
                id="footer"
                style={{
                    backgroundImage: `url(${footerBg})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                }}
            >
                <div className="container footer1">
                    <div className="row justify-content-center">
                        <div className="col-9 text-center">
                            <img src={logo} className="img-fluid logo" alt="" />
                            <p className="footer-para">
                                Syltrips is Sylhets first online travel app that
                                comes with ride sharing and digital on demand
                                market place, home service, concierge, bus
                                reservation, product delivery and logistics
                                services.
                            </p>

                            <ul class="d-flex justify-content-around footer-menu">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Syltrips Ride
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Jhotpot Solution
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Trucker 365
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Zylmart
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Syltrips OTA
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row"></div>
                </div>
            </div>
            <div className="footer2">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-3">
                            <h1 className="footer-title">Address</h1>
                            <div className="px-3">
                                <div className="d-flex pb-3 pt-3">
                                    <div className="float-left">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <div className="float-right">
                                        <p className="pl-3">
                                            House No: 14, Lane No: 03, Housing
                                            Estates - Sylhet (121.20 mi) Sylhet
                                            3100
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex pb-3">
                                    <div className="float-left">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <div className="float-right">
                                        <p className="pl-3">
                                            09613 600 700 / 01313721950
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex pb-3">
                                    <div className="float-left">
                                        <img src={icon3} alt="" />
                                    </div>
                                    <div className="float-right">
                                        <p className="pl-3">www.syltrips.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-3">
                            <h1 className="footer-title">Agent App</h1>
                            <li>
                                <a href="/" className="link">
                                    Syltrips Agent
                                </a>
                            </li>
                            <li>
                                <a href="/" className="link">
                                    Trucker Agent
                                </a>
                            </li>
                            <li>
                                <a href="/" className="link">
                                    Jhotpot Solution Agent
                                </a>
                            </li>
                            <li>
                                <a href="/" className="link">
                                    Zylmart Marchant
                                </a>
                            </li>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-3">
                            <h1 className="footer-title">Quick Link</h1>
                            <li className="">
                                <a href="/" className="link">
                                    About Us
                                </a>
                                <a href="/" className="link ml-5">
                                    Syltrips HR
                                </a>
                            </li>
                            <li>
                                <a href="/" className="link">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/" className="link">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="/" className="link">
                                    Help
                                </a>
                            </li>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-3">
                            <h1 className="footer-title">Follow Us</h1>
                            <div
                                className="footer-social-icon"
                                style={{ paddingTop: "7px" }}
                            >
                                <a href="/" className="pr-5 text-white">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="/" className="pr-5 text-white">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="/" className="pr-5 text-white">
                                    <i class="fab fa-pinterest-p"></i>
                                </a>
                                <a href="/" className="pr-5 text-white">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                            <h1 className="footer-title mt-3 mb-3">
                                Download App
                            </h1>
                            <a className="btn icon-btn" href="/">
                                <img
                                    src={google}
                                    style={{ width: "147px" }}
                                    alt=""
                                />
                            </a>
                            <a className="btn icon-btn" href="/">
                                <img
                                    src={apple}
                                    alt=""
                                    style={{ width: "147px" }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
