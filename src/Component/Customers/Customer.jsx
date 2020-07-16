import React from "react";
import "./Customer.scss";

import customer from "../../images/ride/customer.png";
import quot from "../../images/ride/quot.png";

const Customer = () => {
    return (
        <div id="customer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-7 text-center">
                        <h1 className="title mb-3">
                            What’s our customer are saying
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Diam commodo curabitur tristique integer purus
                            suscipit eget in.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div
                        id="carouselExampleControls"
                        class="carousel slide"
                        data-ride="carousel"
                    >
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 col-xl-7 text-center">
                                        <div className="mb-5 mt-5">
                                            <img
                                                src={customer}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="quot-div">
                                            <img
                                                src={quot}
                                                alt=""
                                                className="quot"
                                            />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Amet
                                            purus tellus tellus justo urna.
                                            Mauris arcu in elementum rhoncus,
                                            mattis integer. Nulla aenean
                                            sagittis tincidunt adipiscing
                                            habitasse a dictum in in.
                                        </p>
                                        <h4>Adnan Ravi</h4>
                                        <p className="designation">
                                            <i>Manager</i>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 col-xl-7 text-center">
                                        <div className="mb-5 mt-5">
                                            <img
                                                src={customer}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="quot-div">
                                            <img
                                                src={quot}
                                                alt=""
                                                className="quot"
                                            />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Amet
                                            purus tellus tellus justo urna.
                                            Mauris arcu in elementum rhoncus,
                                            mattis integer. Nulla aenean
                                            sagittis tincidunt adipiscing
                                            habitasse a dictum in in.
                                        </p>
                                        <h4>Adnan Ravi</h4>
                                        <p className="designation">
                                            <i>Manager</i>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 col-xl-7 text-center">
                                        <div className="mb-5 mt-5">
                                            <img
                                                src={customer}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="quot-div">
                                            <img
                                                src={quot}
                                                alt=""
                                                className="quot"
                                            />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Amet
                                            purus tellus tellus justo urna.
                                            Mauris arcu in elementum rhoncus,
                                            mattis integer. Nulla aenean
                                            sagittis tincidunt adipiscing
                                            habitasse a dictum in in.
                                        </p>
                                        <h4>Adnan Ravi</h4>
                                        <p className="designation">
                                            <i>Manager</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            class="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;
