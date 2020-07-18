import React from "react";
import dollar from "../../../images/ride/dollar-icon.png";
import right from "../../../images/ride/cap-icon.png";
import star from "../../../images/ride/car-icon.png";

const ShowDescription = ({ products }) => {
    return (
        <>
            <div className="row pt-5">
                <div className="col-lg-10 offset-lg-2">
                    <h1 style={{ fontSize: "24px", fontWeight: "500" }}>
                        {products.title}
                    </h1>
                    <div className="d-flex">
                        <p style={{ fontSize: "20px", color: "#000" }}>
                            {products.info1}
                        </p>
                        <p
                            className="pl-3"
                            style={{ fontSize: "20px", color: "#000" }}
                        >
                            {products.info2}
                        </p>
                    </div>
                    <p> {products.description} </p>
                    <div className="icon-box">
                        <p>
                            <span>
                                <img src={dollar} alt="" />
                            </span>
                            Budget Friendly
                        </p>
                        <p>
                            <span>
                                <img src={right} alt="" />
                            </span>
                            Best Driver
                        </p>
                        <p>
                            <span>
                                <img src={star} alt="" />
                            </span>
                            Safe ride
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowDescription;
