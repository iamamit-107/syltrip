import React from "react";

import white from "../../../images/upper-white.png";
import headphone from "../../../images/headphone.png";

import { useState } from "react";
import { useEffect } from "react";

const MinHeader = () => {
    const [display, setDisplay] = useState("block");
    const [position, setPosition] = useState("relative");
    const [top, setTop] = useState("0px");
    useEffect(() => {
        document.addEventListener("scroll", () => {
            // const color = window.scrollY > 20 ? "none" : "block";
            const positions = window.scrollY > 20 ? "absolute" : "relative";
            const tops = window.scrollY > 20 ? "-54px" : "0px";
            setPosition(positions);
            setTop(tops);
        });
    }, []);
    return (
        <div
            id="mini-header"
            style={{
                backgroundColor: "#9507B2",
                display: `${display}`,
                position: `${position}`,
                top: `${top}`,
            }}
        >
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <div className="float-left" style={{ height: "100%" }}>
                            <img
                                src={white}
                                alt=""
                                style={{ width: "220px" }}
                            />
                        </div>
                        <div className="float-right d-flex text-light">
                            <p className="mb-0 pl-3 text-light">
                                <span>
                                    <img
                                        src={headphone}
                                        alt=""
                                        className="img-fluid pr-2"
                                    />
                                </span>
                                99002244
                            </p>
                            <p className="mb-0 pl-3 text-light">
                                <span className="pr-2">
                                    <i class="fas fa-phone-alt"></i>
                                </span>
                                99002244
                            </p>
                            <div className="pl-5" style={{ paddingTop: "7px" }}>
                                <a href="/" className="pl-3 text-white">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="/" className="pl-3 text-white">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="/" className="pl-3 text-white">
                                    <i class="fab fa-pinterest-p"></i>
                                </a>
                                <a href="/" className="pl-3 text-white">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinHeader;
