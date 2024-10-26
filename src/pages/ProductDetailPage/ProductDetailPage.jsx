import React from 'react';
import './ProductDetailPage.scss';
import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetails from '../../components/ProductDetails';
import RelatedProducts from '../../components/RelatedProducts';
import Footer from '../../components/Footer';

const ProductDetailPage = () => {

    return (
        <div className={`product-detail-page-main-container`}>
            <Header />
            <Breadcrumb />
            <ProductDetails />
            <RelatedProducts />
            <Footer />
        </div>
    )
}

export default ProductDetailPage;