import React from "react";
import './LandingPage.scss';
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";


const LandingPage = () => {

    return (
        <div className={`landing-page-main-container`}>
            <Header />
            <HeroSection />
        </div>
    )
}

export default LandingPage;