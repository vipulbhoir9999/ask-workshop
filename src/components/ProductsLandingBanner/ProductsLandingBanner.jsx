import React from 'react';
import './ProductsLandingBanner.scss';
import BannerImage from '../../assets/images/products_landing_page_image.png';

const ProductsLandingBanner = () => {

    return (
        <div className={`products-landing-banner-main-container`}>
            <img src={BannerImage} alt='products landing banner' />
            <p className={`products-banner-description`}>"Create a home that tells your story. Explore our exquisite range of decor to find pieces that reflect your style and elevate your living space."</p>
        </div>
    )
}

export default ProductsLandingBanner;