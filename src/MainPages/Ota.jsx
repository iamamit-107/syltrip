import React, { useEffect } from "react";
import MinHeader from "../Pages/RidePage/MinHeader/MinHeader";
import Header from "../Pages/RidePage/Header/Header";
import OtaBanner from "../Pages/OtaPage/OtaBanner/OtaBanner";
import OtaCounter from "../Pages/OtaPage/OtaCounter/OtaCounter";
import OneApp from "../Pages/OtaPage/OneApp/OneApp";
import HowOtaWorks from "../Pages/OtaPage/HowOtaWorks/HowOtaWorks";
import OtaService from "../Pages/OtaPage/OtaService/OtaService";
import WhyOta from "../Pages/OtaPage/WhyOta/WhyOta";
import Customer from "../Component/Customers/Customer";
import Download from "../Pages/HomePage/download/Download";
import Footer from "../Pages/HomePage/Footer/Footer";
import TruckStories from "../Pages/TruckerPage/TruckStories";

const Ota = () => {
    useEffect(() => {
        window.scroll(0, 0);
    });
    return (
        <>
            <MinHeader />
            <Header />
            <OtaBanner />
            <OtaCounter />
            <OneApp />
            <HowOtaWorks />
            <OtaService />
            <WhyOta />
            <Customer />
            <TruckStories />
            <Download />
            <Footer />
        </>
    );
};

export default Ota;
