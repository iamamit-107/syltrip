import React from "react";
import "./WhySection.scss";
import ImageBox from "./ImageBox";

const WhySection = ({ heading, desc }) => {
    return (
        <div id="why-section">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-12 text-center">
                        <h1 className="title mb-3">{heading}</h1>
                        <p>{desc}</p>
                    </div>
                </div>

                {/* image box */}
                <ImageBox />

                <div className="row">
                    <div className="col-12 text-center">
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
    );
};

export default WhySection;
