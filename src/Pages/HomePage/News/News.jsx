import React from "react";
import "./News.scss";

import news1 from "../../../images/news1.png";
import news2 from "../../../images/news2.png";
import news3 from "../../../images/news3.png";
import RightArrow from "../../../Component/Icon/RightArrow";

const News = () => {
    return (
        <div id="news">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="title">News And Event</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-3">
                        <div className="card">
                            <img
                                src={news1}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">12 March, 2020</p>
                                <h5 className="card-title">
                                    New app has been launched
                                </h5>
                                <p className="card-text">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Suscipit expedita vel ad!
                                    Fugit quas doloribus nobis illo, aperiam
                                    explicabo neque?
                                </p>
                                <div className="clearfix">
                                    <div className="float-right">
                                        <button className="btn read-more-btn">
                                            Read More
                                            <span className="pl-3">
                                                <RightArrow />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <div className="card">
                            <img
                                src={news2}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">12 March, 2020</p>
                                <h5 className="card-title">
                                    New app has been launched
                                </h5>
                                <p className="card-text">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Suscipit expedita vel ad!
                                    Fugit quas doloribus nobis illo, aperiam
                                    explicabo neque?
                                </p>
                                <div className="clearfix">
                                    <div className="float-right">
                                        <button className="btn read-more-btn">
                                            Read More
                                            <span className="pl-3">
                                                <RightArrow />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <div className="card">
                            <img
                                src={news3}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">12 March, 2020</p>
                                <h5 className="card-title">
                                    New app has been launched
                                </h5>
                                <p className="card-text">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Suscipit expedita vel ad!
                                    Fugit quas doloribus nobis illo, aperiam
                                    explicabo neque?
                                </p>
                                <div className="clearfix">
                                    <div className="float-right">
                                        <button className="btn read-more-btn">
                                            Read More
                                            <span className="pl-3">
                                                <RightArrow />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <button className="btn btn-download">
                            View All
                            <i class="fas fa-chevron-right pl-3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
