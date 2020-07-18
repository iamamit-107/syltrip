import React, { useEffect } from "react";
import MinHeader from "../Pages/RidePage/MinHeader/MinHeader";
import Header from "../Pages/RidePage/Header/Header";
import JhotpotBanner from "../Pages/JhotpotPage/JhotpotBanner/JhotpotBanner";
import JhotpotCounter from "../Pages/JhotpotPage/JhotpotCounter/JhotpotCounter";
import OneStopSolutions from "../Pages/JhotpotPage/OneStopSolution/OneStopSolution";
import HowJhotpotWorks from "../Pages/JhotpotPage/HowJhotpotWorks/HowJhotpotWorks";
import WhyJhotpot from "../Pages/JhotpotPage/WhyJhotpot/WhyJhotpot";
import Customer from "../Component/Customers/Customer";
import TruckStories from "../Pages/TruckerPage/TruckStories";
import Download from "../Pages/HomePage/download/Download";
import Footer from "../Pages/HomePage/Footer/Footer";
import JhotpotService from "../Pages/JhotpotPage/JhotpotService/JhotpotService";

const Jhotpot = () => {
    useEffect(() => {
        window.scroll(0, 0);
    });
    return (
        <>
            <MinHeader />
            <Header />
            <JhotpotBanner />
            <JhotpotCounter />
            <OneStopSolutions />
            <HowJhotpotWorks />
            <JhotpotService />
            <WhyJhotpot />
            <Customer />
            <TruckStories />
            <Download />
            <Footer />
        </>
    );
};

export default Jhotpot;
