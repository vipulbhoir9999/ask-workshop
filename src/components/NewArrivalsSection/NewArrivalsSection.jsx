import React, { useState, useEffect, } from 'react';
import './NewArrivalsSection.scss';
import { useNavigate } from 'react-router-dom';
import products from '../../mdm/products.json';

const NewArrivalsSection = () => {
    const navigate = useNavigate();

    const handleProductItemClick = (productId) => {
        navigate(`/products/${productId}`);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const [newArrivals, setNewArrivals] = useState([]);
    const [limitedNewArrivals, setLimitedNewArrivals] = useState([]);
    const [isViewMore, setIsViewMore] = useState(false);
    const [renderProducts, setRenderProducts] = useState([]);

    useEffect(() => {
        const newArrivals = products.filter(item => item["Is New Arrival"] == "Yes");
        let limitedNewArrivals = [];
        const width = window.innerWidth;
        const maxNum = width <= 480 ? 2 : 3;
        for (let i = 0; i < maxNum && i < newArrivals.length; i++) {
            limitedNewArrivals.push(newArrivals[i]);
        }
        setLimitedNewArrivals(limitedNewArrivals);
        setNewArrivals(newArrivals);
    }, []);

    useEffect(() => {
        if (isViewMore) {
            setRenderProducts(newArrivals);
        } else {
            setRenderProducts(limitedNewArrivals);
        }
    }, [isViewMore, limitedNewArrivals, newArrivals]);

    return (
        <div className={`new-arrivals-section-main-container`}>
            <p className={`new-arrivals-title`}>New Arrivals</p>

            <div className={`products-card-container`}>
                {
                    renderProducts.map(item =>
                        <div key={item.ID} className={`product-card`} onClick={() => handleProductItemClick(item.ID)}>
                            <div>
                                <img alt='hanging lights' src={item["Images (3 comma separated image links)"]} />
                                <p>{item.Name}</p>
                            </div>
                        </div>
                    )
                }
            </div>

            <p onClick={() => setIsViewMore(val => !val)} className={`view-all-button`}>{isViewMore ? "View Less" : "View More"}</p>
        </div>
    )
}

export default NewArrivalsSection;