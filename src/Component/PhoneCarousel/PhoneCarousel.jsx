import React from "react";
import "./PhoneCarousel.scss";

import phoneBg from "../../images/phone-bg.png";
import phone from "../../images/phone.png";

const PhoneCarousel = () => {
    return (
        <div
            className="col-lg-5 offset-lg-1 phone-bg"
            style={{ backgroundImage: `url(${phoneBg})` }}
        >
            <div
                id="carouselExampleSlidesOnly"
                class="carousel slide"
                data-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={phone} className="img-fluid" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={phone} className="img-fluid" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={phone} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCarousel;
