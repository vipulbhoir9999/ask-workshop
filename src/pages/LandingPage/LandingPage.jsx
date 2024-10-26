import React, { useEffect } from "react";
import './LandingPage.scss';
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import ShopCategoriesSection from "../../components/ShopCategoriesSection";
import TopPicks from "../../components/TopPicks";
import NewArrivalsSection from "../../components/NewArrivalsSection";
import FeedbackSection from "../../components/FeedbackSection";
import SubscribeSection from "../../components/SubscribeSection";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

const LandingPage = () => {

    useEffect(() => {
        document.title = "Ask Enterprises";
    })

    return (
        <div className={`landing-page-main-container`}>
            <Header />
            <HeroSection />
            <ShopCategoriesSection />
            <TopPicks />
            <NewArrivalsSection />
            <FeedbackSection />
            <SubscribeSection />
            <FAQ />
            <Footer />
        </div>
    )
}

export default LandingPage;