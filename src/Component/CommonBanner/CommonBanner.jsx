import React from "react";
import "./CommonBanner.scss";

const CommonBanner = ({ bg, logo, desc, header, headerBold }) => {
    return (
        <div id="banner" style={{ backgroundImage: `url(${bg})` }}>
            <div className="overlay">
                <div className="container">
                    <div className="row align-items-center d-flex">
                        <div className="col-xl-6 text-area">
                            <img src={logo} alt="" />
                            <h1>
                                {header} <br />
                                <span className="bold"> {headerBold}</span>
                            </h1>
                            <p>{desc}</p>
                            <button
                                className="btn btn-download"
                                style={{ marginTop: "20px" }}
                                type="submit"
                            >
                                Download App
                                <i class="fas fa-chevron-right pl-3"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;
