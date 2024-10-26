import React from 'react';
import './ProductsPage.scss';
import Header from '../../components/Header';
import ProductsLandingBanner from '../../components/ProductsLandingBanner/ProductsLandingBanner';

const ProductsPage = () => {

    return (
        <div className={`products-page-main-container`}>
            <Header />
            <ProductsLandingBanner />
        </div>
    )
}

export default ProductsPage;