import React, { useState, useEffect, } from 'react';
import './NewArrivalsSection.scss';
import { useNavigate } from 'react-router-dom';
import products from '../../mdm/products.json';

const NewArrivalsSection = () => {
    const navigate = useNavigate();

    const handleProductItemClick = () => {
        navigate("/products/productdetailpage");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const [newArrivals, setNewArrivals] = useState([]);

    useEffect(() => {
        const newArrivals = products.filter(item => item["Is New Arrival"] == "Yes");
        setNewArrivals(newArrivals);
    }, []);

    return (
        <div className={`new-arrivals-section-main-container`}>
            <p className={`new-arrivals-title`}>New Arrivals</p>

            <div className={`products-card-container`}>
                {
                    newArrivals.map(item =>
                        <div className={`product-card`} onClick={handleProductItemClick}>
                            <div>
                                <img alt='hanging lights' src={item["Images (3 comma separated image links)"]} />
                                <p>{item.Name}</p>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* <p className={`view-all-button`}>View All</p> */}
        </div>
    )
}

export default NewArrivalsSection;