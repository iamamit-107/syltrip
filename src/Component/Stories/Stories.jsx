import React from "react";
import "./Stories.scss";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import story1 from "../../images/ride/story1.png";
import story2 from "../../images/ride/story2.png";
import story3 from "../../images/ride/story3.png";
import story4 from "../../images/ride/story4.png";
import story5 from "../../images/ride/story5.png";
import story6 from "../../images/ride/story6.png";
import { useState } from "react";

const images = [story1, story2, story3, story4, story5, story6];

const Stories = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id="stories">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12 text-center">
                        <h1 className="title mb-3">Our Stories</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem sed aliquet scelerisque fringilla
                            pharetra, diam. Vulputate ac duis sem mattis feugiat
                            et vestibulum viverra. Neque, maecenas sit lacus
                            elit mi eleifend dui. Tempus placerat lobortis
                            venenatis, eu quis.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-4 mb-3">
                                <img
                                    src={story1}
                                    alt=""
                                    className="img-fluid"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(0);
                                    }}
                                />
                            </div>
                            <div className="col-lg-4 mb-3">
                                <img
                                    src={story2}
                                    alt=""
                                    className="img-fluid"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(1);
                                    }}
                                />
                            </div>
                            <div className="col-lg-4 mb-3">
                                <img
                                    src={story3}
                                    alt=""
                                    className="img-fluid"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(2);
                                    }}
                                />
                            </div>
                            <div className="col-lg-4 mb-3">
                                <img
                                    src={story4}
                                    alt=""
                                    className="img-fluid"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(3);
                                    }}
                                />
                            </div>
                            <div className="col-lg-4 mb-3">
                                <img
                                    src={story5}
                                    alt=""
                                    className="img-fluid"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(4);
                                    }}
                                />
                            </div>
                            <div className="col-lg-4 mb-3">
                                <img
                                    src={story6}
                                    alt=""
                                    className="img-fluid"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(5);
                                    }}
                                />
                            </div>
                        </div>

                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={
                                    images[(photoIndex + 1) % images.length]
                                }
                                prevSrc={
                                    images[
                                        (photoIndex + images.length - 1) %
                                            images.length
                                    ]
                                }
                                onCloseRequest={() => setIsOpen(false)}
                                onMovePrevRequest={() =>
                                    setPhotoIndex(
                                        (photoIndex + images.length - 1) %
                                            images.length
                                    )
                                }
                                onMoveNextRequest={() =>
                                    setPhotoIndex(
                                        (photoIndex + 1) % images.length
                                    )
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
