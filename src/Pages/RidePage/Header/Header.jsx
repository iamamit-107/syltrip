import React from "react";
import "./Header.scss";

import logo from "../../../images/logo2.png";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
    const [fixed, setFixed] = useState("");
    const [color, setColor] = useState("");
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const color = window.scrollY > 20 ? "fixed-top" : "";
            const colors = window.scrollY > 20 ? "#fff" : "#FFFBF7";
            setFixed(color);
            setColor(colors);
        });
    }, []);
    return (
        <>
            <header
                className={`${fixed}`}
                style={{
                    backgroundColor: "#fff",
                    zIndex: "100",
                }}
            >
                <div className={`container`}>
                    <nav class={`navbar navbar-expand-lg  navbar-light py-0 `}>
                        <div
                            class="container pl-0 pr-0"
                            style={{ position: "", top: "0" }}
                        >
                            <NavLink class="navbar-brand py-0" to="/">
                                <img
                                    src={logo}
                                    className=""
                                    alt=""
                                    style={{ width: "220px" }}
                                />
                            </NavLink>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div
                                class="collapse navbar-collapse"
                                id="navbarNav"
                                style={{ border: "none" }}
                            >
                                <ul
                                    class="navbar-nav ml-auto"
                                    style={{ zIndex: "10" }}
                                >
                                    <li class="nav-item">
                                        <NavLink
                                            class="nav-link active"
                                            aria-current="page"
                                            to="/"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink class="nav-link" to="/ride">
                                            Syltrips Ride
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink
                                            class="nav-link"
                                            to="/jhotpot-solution"
                                        >
                                            Jhotpot Solution
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink class="nav-link" to="/trucker">
                                            Trucker 365
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">
                                            Zylmart
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink
                                            class="nav-link"
                                            to="/syltrips-ota"
                                        >
                                            Syltrips OTA
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <></>
        </>
    );
};

export default Header;
