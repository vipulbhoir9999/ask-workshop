import React from 'react';
import './ProductDetailPage.scss';
import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';

const ProductDetailPage = () => {

    return (
        <div className={`product-detail-page-main-container`}>
            <Header />
            <Breadcrumb />
        </div>
    )
}

export default ProductDetailPage;