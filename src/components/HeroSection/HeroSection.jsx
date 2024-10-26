import React from 'react';
import './HeroSection.scss';
import HeroSectionImage from '../../assets/images/hero_section_image.png';
import Instagram from '../../assets/icons/Instagram.png';
import Facebook from '../../assets/icons/Facebook.png';

const HeroSection = () => {

    return (
        <div className={`hero-section-main-container`}>
            <div className={`hero-section-main-content-container`}>
                <div className={`hero-section-content`}>
                    <div className={`hero-section-title`}>
                        <p>Crafted for Elegance</p>
                    </div>
                    <div className={`hero-section-subtitle`}>
                        <p>Wooden Décor</p>
                    </div>
                    <div className={`hero-section-description`}>
                        <p className={`quote`}>“</p>
                        <p className={`hero-section-description-text`}>Transform your space with the timeless charm of handcrafted wooden pieces. Discover unique designs that bring warmth and sophistication to your home</p>
                        <p className={`quote`}>“</p>
                    </div>
                    <div className={`hero-section-counts`}>
                        <div>
                            <p className={`count`}>20+</p>
                            <p className={`title`}>Unique styles</p>
                        </div>
                        <div>
                            <p className={`count`}>30+</p>
                            <p className={`title`}>Art Products</p>
                        </div>
                        <div>
                            <p className={`count`}>50+</p>
                            <p className={`title`}>Home Decor</p>
                        </div>
                    </div>
                </div>
                <div className={`hero-section-image`}>
                    <img alt='hero-banner-image' src={HeroSectionImage} />
                </div>
            </div>
            <div className={`hero-section-social-links-container`}>
                <p>Follow us</p>
                <a target='_blank' rel='noreferrer' href='https://google.com'>
                    <img alt='instagram' src={Instagram} />
                </a>
                <a target='_blank' rel='noreferrer' href='https://google.com'>
                    <img alt='facebook' src={Facebook} />
                </a>
            </div>
        </div>
    )
}

export default HeroSection;