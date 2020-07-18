import React from "react";
import "./Breadcrumb.scss";
import { Link } from "react-router-dom";

const Breadcrumb = ({ next }) => {
    return (
        <div id="breadcrumb">
            <div className="row">
                <div className="col-12">
                    <nav>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <i class="fas fa-chevron-right"></i>
                        <li>
                            <Link href=""> {next} </Link>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
