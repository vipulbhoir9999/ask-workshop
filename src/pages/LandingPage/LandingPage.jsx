import React from "react";
import './LandingPage.scss';
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import ShopCategoriesSection from "../../components/ShopCategoriesSection";
import TopPicks from "../../components/TopPicks";
import NewArrivalsSection from "../../components/NewArrivalsSection";
import FeedbackSection from "../../components/FeedbackSection";
import SubscribeSection from "../../components/SubscribeSection";

const LandingPage = () => {

    return (
        <div className={`landing-page-main-container`}>
            <Header />
            <HeroSection />
            <ShopCategoriesSection />
            <TopPicks />
            <NewArrivalsSection />
            <FeedbackSection />
            <SubscribeSection />
        </div>
    )
}

export default LandingPage;