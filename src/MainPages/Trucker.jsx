import React, { useEffect } from "react";
import MinHeader from "../Pages/RidePage/MinHeader/MinHeader";
import Header from "../Pages/RidePage/Header/Header";
import TruckerBanner from "../Pages/TruckerPage/TruckerBanner/TruckerBanner";
import TruckerCounter from "../Pages/TruckerPage/TruckerCounter/TruckerCounter";
import BookTrucker from "../Pages/TruckerPage/BookTrucker/BookTrucker";
import WhyTrucker from "../Pages/TruckerPage/WhyTrucker/WhyTrucker";
import Customer from "../Component/Customers/Customer";
import TruckStories from "../Pages/TruckerPage/TruckStories";
import Download from "../Pages/HomePage/download/Download";
import Footer from "../Pages/HomePage/Footer/Footer";
import HowTruckerWorks from "../Pages/TruckerPage/HowTruckerWorks/HowTruckerWorks";
import TruckTypes from "../Pages/TruckerPage/TruckTypes/TruckTypes";

const Trucker = () => {
    useEffect(() => {
        window.scroll(0, 0);
    });
    return (
        <>
            <MinHeader />
            <Header />
            <TruckerBanner />
            <TruckerCounter />
            <BookTrucker />
            <HowTruckerWorks />
            <TruckTypes />
            <WhyTrucker />
            <Customer />
            <TruckStories />
            <Download />
            <Footer />
        </>
    );
};

export default Trucker;
