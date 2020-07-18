import React from "react";
import MinHeader from "../Pages/RidePage/MinHeader/MinHeader";
import Header from "../Pages/RidePage/Header/Header";
import Banner from "../Pages/RidePage/Banner/Banner";
import Counter from "../Pages/RidePage/Counter/Counter";
import CarForOccation from "../Pages/RidePage/CarForOccation/CarForOccation";
import Stories from "../Component/Stories/Stories";
import Customer from "../Component/Customers/Customer";
import Download from "../Pages/HomePage/download/Download";
import Footer from "../Pages/HomePage/Footer/Footer";
import RideType from "../Pages/RidePage/RideType/RideType";
import { useEffect } from "react";
import WhyRide from "../Pages/RidePage/WhyRide/WhyRide";
import HowRideWorks from "../Pages/RidePage/HowRideWorks/HowRideWorks";

const Ride = () => {
    useEffect(() => {
        window.scroll(0, 0);
    });
    return (
        <>
            <MinHeader />
            <Header />
            <Banner />
            <Counter />
            <CarForOccation />
            <HowRideWorks />
            <RideType />
            <WhyRide />
            <Customer />
            <Stories />
            <Download />
            <Footer />
        </>
    );
};

export default Ride;
