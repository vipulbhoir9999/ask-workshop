import React, { useState, useEffect } from 'react';
import './ProductDetailPage.scss';
import Header from '../../components/Header';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetails from '../../components/ProductDetails';
import RelatedProducts from '../../components/RelatedProducts';
import Footer from '../../components/Footer';
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {

    const { id } = useParams(); // Get the 'id' from the URL

    const [productId, setProductId] = useState(id);

    useEffect(() => {
        document.title = "Ask Enterprises | Product Details"
    })

    return (
        <div className={`product-detail-page-main-container`}>
            <Header />
            <Breadcrumb productId={productId} setProductId={setProductId} />
            <ProductDetails productId={productId} setProductId={setProductId} />
            <RelatedProducts productId={productId} setProductId={setProductId} />
            <Footer />
        </div>
    )
}

export default ProductDetailPage;