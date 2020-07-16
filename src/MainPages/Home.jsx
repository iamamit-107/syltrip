import React from "react";
import MiniHeader from "../Pages/HomePage/MiniHeader/MiniHeader";
import MainHeader from "../Pages/HomePage/MainHeader/MainHeader";
import Service from "../Pages/HomePage/Service/Service";
import SyltripRide from "../Pages/HomePage/SyltripRide/SyltripRide";
import WhySyltrips from "../Pages/HomePage/WhySyltrips/WhySyltrips";
import News from "../Pages/HomePage/News/News";
import ContactUs from "../Pages/HomePage/ContactUs/ContactUs";
import Download from "../Pages/HomePage/download/Download";
import Footer from "../Pages/HomePage/Footer/Footer";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scroll(0, 0);
    });
    return (
        <>
            <MiniHeader />
            <MainHeader />
            <Service />
            <SyltripRide />
            <WhySyltrips />
            <News />
            <ContactUs />
            <Download />
            <Footer />
        </>
    );
};

export default Home;
