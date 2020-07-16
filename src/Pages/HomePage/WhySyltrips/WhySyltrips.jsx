import React from "react";
import "./WhySyltrips.scss";

import icon from "../../../images/right.png";
import why1 from "../../../images/why1.png";
import why2 from "../../../images/why2.png";
import why3 from "../../../images/why3.png";

const WhySyltrips = () => {
    return (
        <div id="why-syltrips">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="img-collapse">
                            <img src={why1} alt="" className="img-fluid img1" />
                            <img src={why2} alt="" className="img-fluid img2" />
                            <img src={why3} alt="" className="img-fluid img3" />
                        </div>
                    </div>
                    <div className="col-lg-6 column-padding">
                        <div className="heading pb-5">
                            <h1>Why Syltrips Ltd.</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Sequi, quod hic.
                                Exercitationem, culpa dolores est tempore magni
                                labore, minima mollitia neque in tempora
                                recusandae pariatur expedita illum excepturi sit
                                natus?
                            </p>
                        </div>
                        <div className="icon-text pb-3">
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Get Super Fast Service
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo aliquid quidem, debitis
                                totam cum atque consectetur. Maxime eaque unde
                                illo.
                            </p>
                        </div>
                        <div className="icon-text pb-3">
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Get Super Fast Service
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo aliquid quidem, debitis
                                totam cum atque consectetur. Maxime eaque unde
                                illo.
                            </p>
                        </div>
                        <div className="icon-text pb-3">
                            <h5>
                                <span className="pr-3">
                                    <img src={icon} alt="" />
                                </span>
                                Get Super Fast Service
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo aliquid quidem, debitis
                                totam cum atque consectetur. Maxime eaque unde
                                illo.
                            </p>
                        </div>
                        <button className="btn btn-download">
                            Learn More
                            <i class="fas fa-chevron-right pl-3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySyltrips;
