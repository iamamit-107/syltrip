import React from "react";

const ShowImage = ({ products }) => {
    return (
        <>
            <img src={products.img} alt="" className="img-fluid" />
        </>
    );
};

export default ShowImage;
