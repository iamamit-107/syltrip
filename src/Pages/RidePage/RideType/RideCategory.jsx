import React from "react";

const RideCategory = ({ ride, handleContent }) => {
    return (
        <>
            <li class="nav-item" role="presentation">
                <a
                    class="nav-link"
                    onClick={() => handleContent(ride)}
                    style={{ cursor: "pointer" }}
                >
                    {ride.name}
                </a>
            </li>
        </>
    );
};

export default RideCategory;
