import React, { useEffect, useState } from 'react';
import './ProductsLandingBanner.scss';
import BannerImage from '../../assets/images/products_landing_page_image.png';
import BannerImageMobile from '../../assets/images/product-landing-page-image-mobile.png';

const ProductsLandingBanner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const width = window.innerWidth;
        setIsMobile(width <= 480 ? true : false);
    }, []);

    return (
        <div className={`products-landing-banner-main-container`}>
            <img src={isMobile ? BannerImageMobile : BannerImage} alt='products landing banner' />
            <p className={`products-banner-description`}>"Create a home that tells your story. Explore our exquisite range of decor to find pieces that reflect your style and elevate your living space."</p>
        </div>
    )
}

export default ProductsLandingBanner;