import React from "react";
import './LandingPage.scss';
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import ShopCategoriesSection from "../../components/ShopCategoriesSection";
import TopPicks from "../../components/TopPicks";


const LandingPage = () => {

    return (
        <div className={`landing-page-main-container`}>
            <Header />
            <HeroSection />
            <ShopCategoriesSection />
            <TopPicks />
        </div>
    )
}

export default LandingPage;