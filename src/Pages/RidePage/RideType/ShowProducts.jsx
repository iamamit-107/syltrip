import React from "react";
import carBg from "../../../images/ride/product-bg.png";

const ShowProducts = ({ products, handleProducts }) => {
    console.log(products);
    return (
        <>
            <div
                className="col text-center mt-5 "
                style={{ cursor: "pointer" }}
                onClick={() => handleProducts(products)}
            >
                <div
                    className="py-5"
                    style={{
                        backgroundImage: `url(${carBg})`,
                        padding: " 0",
                        backgroundPosition: "center",
                        backgroundSize: "",
                    }}
                >
                    <img
                        src={products.imgSmall}
                        className="img-fluid"
                        alt=""
                        style={{ position: "relative", top: "-14px" }}
                    />
                </div>
                <p
                    className="mt-4"
                    style={{ fontSize: "16px", fontWeight: "normal" }}
                >
                    {products.name}
                </p>
            </div>
        </>
    );
};

export default ShowProducts;
