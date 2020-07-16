import React from "react";
import "./ContactUs.scss";

import { useForm } from "react-hook-form";

import socialFeed from "../../../images/socialFeed.png";

const ContactUs = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div id="contact-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5">
                        <h1 className="title">Social Feed</h1>
                        <img
                            src={socialFeed}
                            alt=""
                            className="img-fluid w-100"
                            style={{ width: "542px", height: "420px" }}
                        />
                    </div>
                    <div className="col-lg-8 mb-3">
                        <h1 className="title">Contact Us</h1>
                        <div className="row contact-us-bg">
                            <div className="col-md-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="mb-3">
                                        <label
                                            for="name"
                                            className="form-label"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            ref={register({ required: true })}
                                        />
                                        {errors.name && <p>Name is required</p>}
                                    </div>
                                    <div class="mb-3">
                                        <label
                                            for="mobile"
                                            className="form-label"
                                        >
                                            Your Mobile No.
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="mobile"
                                            name="mobile"
                                            ref={register({ required: true })}
                                        />
                                        {errors.mobile && (
                                            <p>Mobile No. is required</p>
                                        )}
                                    </div>

                                    <div class="mb-3">
                                        <label
                                            for="email"
                                            className="form-label"
                                        >
                                            Your Email Address
                                        </label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="email"
                                            name="email"
                                            ref={register({ required: true })}
                                        />
                                        {errors.email && (
                                            <p>Email is required</p>
                                        )}
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-8">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="mb-3">
                                        <label for="message" class="form-label">
                                            Your Message
                                        </label>
                                        <textarea
                                            class="form-control"
                                            id="message"
                                            rows="8"
                                            name="message"
                                            ref={register({ required: true })}
                                        ></textarea>
                                        {errors.message && (
                                            <p>Message is required</p>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        <button
                                            className="btn btn-download"
                                            style={{ marginBottom: "40px" }}
                                            type="submit"
                                        >
                                            Send
                                            <i class="fas fa-chevron-right pl-3"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
