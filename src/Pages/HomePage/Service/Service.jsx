import React from "react";
import "./Service.scss";

import service2 from "../../../images/service2.png";
import service5 from "../../../images/service5.png";
import service3 from "../../../images/service3.png";
import service4 from "../../../images/service4.png";

const Service = () => {
    return (
        <>
            <div class="main-wrapper pb-5">
                <section class="main-platform bg-image">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-10">
                                <div
                                    class="section-title text-center wow fadeInUp"
                                    data-wow-duration=".7s"
                                >
                                    <h1 class="title mb-4">Our Services</h1>
                                    <p className="mb-5">
                                        <span>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Diam
                                            commodo curabitur tristique integer
                                            purus suscipit eget in. Sit id
                                            sagittis tellus euismod amet ut
                                            massa. Lacinia lectus phasellus dui
                                            consectetur turpis tortor vitae.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div
                                    class="main-platform-content wow fadeInUp"
                                    data-wow-duration=".7s"
                                >
                                    <div id="main-platform-tab-carousel">
                                        <ul
                                            class="nav platform-tab nav-tabs justify-content-center"
                                            id="myTab"
                                            role="tablist"
                                        >
                                            <li class="nav-item col-lg-2 col-md-4">
                                                <a
                                                    class="nav-link"
                                                    id="bike-tab"
                                                    data-toggle="tab"
                                                    href="#bike"
                                                    role="tab"
                                                    aria-controls="bike"
                                                    aria-selected="false"
                                                >
                                                    <img
                                                        src={service5}
                                                        alt="bike"
                                                        className="img-fluid"
                                                    />

                                                    <div class="tab-circle-box">
                                                        <div class="tab-progress">
                                                            <span
                                                                class="tab-progress-bar progress-1"
                                                                style={{
                                                                    width: "0%",
                                                                }}
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="nav-item col-lg-2 col-md-4">
                                                <a
                                                    class="nav-link"
                                                    id="bike-tab"
                                                    data-toggle="tab"
                                                    href="#bike"
                                                    role="tab"
                                                    aria-controls="bike"
                                                    aria-selected="false"
                                                >
                                                    <img
                                                        src={service2}
                                                        alt="bike"
                                                        className="img-fluid"
                                                    />

                                                    <div class="tab-circle-box">
                                                        <div class="tab-progress">
                                                            <span
                                                                class="tab-progress-bar progress-1"
                                                                style={{
                                                                    width: "0%",
                                                                }}
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="nav-item col-lg-2 col-md-4">
                                                <a
                                                    class="nav-link"
                                                    id="bike-tab"
                                                    data-toggle="tab"
                                                    href="#bike"
                                                    role="tab"
                                                    aria-controls="bike"
                                                    aria-selected="false"
                                                >
                                                    <img
                                                        src={service3}
                                                        alt="bike"
                                                        className="img-fluid"
                                                    />

                                                    <div class="tab-circle-box">
                                                        <div class="tab-progress">
                                                            <span
                                                                class="tab-progress-bar progress-1"
                                                                style={{
                                                                    width: "0%",
                                                                }}
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="nav-item col-lg-2 col-md-4">
                                                <a
                                                    class="nav-link "
                                                    id="bike-tab"
                                                    data-toggle="tab"
                                                    href="#bike"
                                                    role="tab"
                                                    aria-controls="bike"
                                                    aria-selected="false"
                                                >
                                                    <img
                                                        src={service4}
                                                        alt="bike"
                                                        className="img-fluid"
                                                    />

                                                    <div class="tab-circle-box">
                                                        <div class="tab-progress">
                                                            <span
                                                                class="tab-progress-bar progress-1"
                                                                style={{
                                                                    width: "0%",
                                                                }}
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>

                                            <li class="nav-item col-lg-2 col-md-4">
                                                <a
                                                    class="nav-link "
                                                    id="bike-tab"
                                                    data-toggle="tab"
                                                    href="#bike"
                                                    role="tab"
                                                    aria-controls="bike"
                                                    aria-selected="false"
                                                >
                                                    <img
                                                        src={service4}
                                                        alt="bike"
                                                        className="img-fluid"
                                                    />

                                                    <div class="tab-circle-box">
                                                        <div class="tab-progress">
                                                            <span
                                                                class="tab-progress-bar progress-1"
                                                                style={{
                                                                    width: "0%",
                                                                }}
                                                            ></span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Service;
