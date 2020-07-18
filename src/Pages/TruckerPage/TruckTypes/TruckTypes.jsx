import React from "react";
// slick slider
import Slider from "react-slick";

import carBg from "../../../images/ride/Polygon-bg.png";
import car from "../../../images/ride/car.png";
import carWith from "../../../images/trucker/carWithBg.png";

import RideCategory from "../../RidePage/RideType/RideCategory";
import { useState } from "react";
import ShowProducts from "../../RidePage/RideType/ShowProducts";
import ShowDescription from "../../RidePage/RideType/ShowDescription";
import ShowImage from "../../RidePage/RideType/ShowImage";
import truckData from "../../../Data/TruckTypes";

const TruckTypes = () => {
    const [content, setContent] = useState("");
    const [products, setProducts] = useState("");

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const handleContent = (id) => {
        setContent(id);
    };

    const handleProducts = (id) => {
        setProducts(id);
    };

    const cityArea = truckData.find((data) => data.name === "Covered");
    console.log("City Area: ", cityArea.products);

    const cityAreaProducts = cityArea.products.find(
        (data) => (data.name = "1 Ton")
    );
    console.log(cityAreaProducts);

    console.log("Content: ", content);
    console.log("Products: ", products);
    return (
        <div
            id="ride-type"
            style={{ backgroundColor: "#FFFBF7", padding: "70px 0" }}
        >
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-xl-6 line-bg">
                        <div className="car-bg">
                            {products && <ShowImage products={products} />}
                            {!products && (
                                <img src={carWith} className="img-fluid" />
                            )}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <h1 className="title">Our Ride Type</h1>
                        <div className="category">
                            {truckData.map((ride) => (
                                <RideCategory
                                    ride={ride}
                                    handleContent={handleContent}
                                />
                            ))}
                        </div>
                        <div class="tab-content" id="myTabContent">
                            <Slider {...settings}>
                                {content &&
                                    content.products.map((p) => (
                                        <ShowProducts
                                            products={p}
                                            handleProducts={handleProducts}
                                        />
                                    ))}
                                {!content &&
                                    cityArea &&
                                    cityArea.products.map((p) => (
                                        <ShowProducts
                                            products={p}
                                            handleProducts={handleProducts}
                                        />
                                    ))}
                            </Slider>
                        </div>
                        <div>
                            {products && (
                                <ShowDescription products={products} />
                            )}

                            {!products && cityAreaProducts && (
                                <ShowDescription products={cityAreaProducts} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TruckTypes;
