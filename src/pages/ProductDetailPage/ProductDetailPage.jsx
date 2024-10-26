import React from 'react';
import './ProductDetailPage.scss';
import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetails from '../../components/ProductDetails';

const ProductDetailPage = () => {

    return (
        <div className={`product-detail-page-main-container`}>
            <Header />
            <Breadcrumb />
            <ProductDetails />
        </div>
    )
}

export default ProductDetailPage;