import React from "react";
import "./HeroSlider.scss";

import bg from "../../../images/home-bg.png";

const HeroSlider = () => {
    return (
        <div className="hero-slider">
            <div
                id="carouselExampleControls"
                class="carousel slide w-100"
                data-ride="carousel"
                style={{ backgroundColor: "#FFFBF7" }}
            >
                <div class="carousel-inner">
                    <div
                        class="carousel-item active w-100"
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                        }}
                    >
                        <div className="container d-flex h-100">
                            <div className="row d-flex align-items-center h-100">
                                <div className="col-md-7 carousel-text">
                                    <h1 className="title">
                                        <span className="title-span">
                                            We're
                                        </span>
                                        <br /> Syltrips Ltd.
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Nesciunt tempore
                                        maxime aliquam numquam, repudiandae
                                        suscipit. Nemo ipsam ipsa totam eos esse
                                        doloribus tenetur. Deserunt laborum
                                        eveniet ex, nam optio magni?
                                    </p>
                                    <h5 className="h5-title">
                                        What do you right now?
                                    </h5>
                                    <div
                                        className="slider-input"
                                        style={{
                                            width: "80%",
                                            padding: "10px 20px",
                                            backgroundColor: "#F5F5F5",
                                            borderRadius: "20px",
                                            marginTop: "10px",
                                            marginBottom: "30px",
                                        }}
                                    >
                                        <div class="input-group mr-2">
                                            <span
                                                class="input-group-text"
                                                id="basic-addon1"
                                                style={{
                                                    border: "none",
                                                    backgroundColor: "#DF3E9E",
                                                    color: "#fff",
                                                    borderRadius: "8px",
                                                }}
                                            >
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    class="bi bi-search"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                                                    />
                                                </svg>
                                            </span>
                                            <input
                                                style={{
                                                    border: "none",
                                                    backgroundColor: "#F5F5F5",
                                                }}
                                                type="text"
                                                class="form-control"
                                                placeholder="Ex. I need Ride"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                    <button className="btn btn-download">
                                        Download App
                                        <i class="fas fa-chevron-right pl-3"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="carousel-item  w-100"
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                        }}
                    >
                        <div className="container d-flex h-100">
                            <div className="row d-flex align-items-center h-100">
                                <div className="col-md-7">
                                    <h1
                                        style={{
                                            fontSize: "60px",
                                            marginBottom: "30px",
                                        }}
                                    >
                                        <span style={{ fontSize: "24px" }}>
                                            We're
                                        </span>{" "}
                                        <br /> Syltrips Ltd.
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Nesciunt tempore
                                        maxime aliquam numquam, repudiandae
                                        suscipit. Nemo ipsam ipsa totam eos esse
                                        doloribus tenetur. Deserunt laborum
                                        eveniet ex, nam optio magni?
                                    </p>
                                    <h5 style={{ marginTop: "30px" }}>
                                        What do you right now?
                                    </h5>
                                    <div
                                        style={{
                                            width: "80%",
                                            padding: "10px 20px",
                                            backgroundColor: "#F5F5F5",
                                            borderRadius: "20px",
                                            marginTop: "10px",
                                            marginBottom: "30px",
                                        }}
                                    >
                                        <div class="input-group mr-2">
                                            <span
                                                class="input-group-text"
                                                id="basic-addon1"
                                                style={{
                                                    border: "none",
                                                    backgroundColor: "#DF3E9E",
                                                    color: "#fff",
                                                }}
                                            >
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    class="bi bi-search"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                                                    />
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                                                    />
                                                </svg>
                                            </span>
                                            <input
                                                style={{
                                                    border: "none",
                                                    backgroundColor: "#F5F5F5",
                                                }}
                                                type="text"
                                                class="form-control"
                                                placeholder="What Do You Need?"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </div>
                                    </div>
                                    <button className="btn btn-download">
                                        Download App
                                        <i class="fas fa-chevron-right pl-3"></i>
                                    </button>
                                </div>
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
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default HeroSlider;
