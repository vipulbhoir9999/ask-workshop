import React, { useEffect } from 'react';
import './ProductsPage.scss';
import Header from '../../components/Header';
import ProductsLandingBanner from '../../components/ProductsLandingBanner/ProductsLandingBanner';
import ProductsList from '../../components/ProductsList';
import Footer from '../../components/Footer';

const ProductsPage = () => {

    useEffect(() => {
        document.title = "Ask Enterprises | Products"
    })

    return (
        <div className={`products-page-main-container`}>
            <Header />
            <ProductsLandingBanner />
            <ProductsList />
            <Footer />
        </div>
    )
}

export default ProductsPage;