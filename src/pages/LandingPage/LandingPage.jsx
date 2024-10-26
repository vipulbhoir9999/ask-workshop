import React from "react";
import './LandingPage.scss';
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import ShopCategoriesSection from "../../components/ShopCategoriesSection";


const LandingPage = () => {

    return (
        <div className={`landing-page-main-container`}>
            <Header />
            <HeroSection />
            <ShopCategoriesSection />
        </div>
    )
}

export default LandingPage;