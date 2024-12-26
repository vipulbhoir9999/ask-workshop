import React, { useEffect, useState } from 'react';
import './Breadcrumb.scss';
import { useNavigate } from 'react-router-dom';
import products from '../../mdm/products.json';

const Breadcrumb = (props) => {
    const navigate = useNavigate();

    const navigateTo = (page) => {
        navigate(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const [productName, setProductName] = useState('');

    useEffect(() => {
        const productDetails = products.find(item => item.ID == props.productId);
        setProductName(productDetails.Name);
    }, [props.productId]);

    return (
        <div className={`breadcrumb-main-container`}>
            <div>
                <p>
                    <span onClick={() => navigateTo("/")}>Home</span> / <span onClick={() => navigateTo("/products")}>Products</span> / <span className={`current-page`}>{productName}</span>
                </p>
            </div>
        </div>
    )
}

export default Breadcrumb;