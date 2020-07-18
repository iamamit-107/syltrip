import React from "react";
import PhoneCarousel from "../../../Component/PhoneCarousel/PhoneCarousel";
import Breadcrumb from "../../../Component/Breadcrumb/Breadcrumb";

import icon from "../../../images/right.png";

const OneApp = () => {
    return (
        <div id="car-for-occation">
            <div className="container">
                <Breadcrumb next="Zylmart" />
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <div className="heading">
                            <h1>One app-Everything for your travel</h1>
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
                                All service in one app
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Id eget phasellus a quam donec
                                tincidunt. Commodo amet urna lectus sed velit
                                purus, habitant posuere massa.
                            </p>
                        </div>
                        <div className="icon-text">
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                100% trusted and secured
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In leo leo eu, leo. Turpis quam
                                fringilla ultricies lectus ornare cras quis.
                            </p>
                        </div>
                        <div className="icon-text" style={{ border: "none" }}>
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Easy cancellation policy
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Id neque vitae et morbi lectus
                                dapibus accumsan. Nulla semper libero, leo urna
                                risus arcu quis nulla tristique.
                            </p>
                        </div>
                        <button className="btn btn-download">
                            Download App
                            <i class="fas fa-chevron-right pl-3"></i>
                        </button>
                    </div>
                    {/* mobile carousel */}
                    <PhoneCarousel />
                </div>
            </div>
        </div>
    );
};

export default OneApp;
