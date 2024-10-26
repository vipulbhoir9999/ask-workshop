import React from 'react';
import './NewArrivalsSection.scss';
import HangingLights from '../../assets/images/hanging_lights.png';
import TableLamp from '../../assets/images/table_lamp.png';
import WoodenLights from '../../assets/images/wooden_lights.png';
import { useNavigate } from 'react-router-dom';

const NewArrivalsSection = () => {
    const navigate = useNavigate();

    const handleProductItemClick = () => {
        navigate("/products/productdetailpage");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={`new-arrivals-section-main-container`}>
            <p className={`new-arrivals-title`}>New Arrivals</p>

            <div className={`products-card-container`}>
                <div className={`product-card`} onClick={handleProductItemClick}>
                    <div>
                        <img alt='hanging lights' src={HangingLights} />
                        <p>Hanging Lights</p>
                    </div>
                </div>
                <div className={`product-card`} onClick={handleProductItemClick}>
                    <div>
                        <img alt='table lamp' src={TableLamp} />
                        <p>Table Lamp</p>
                    </div>
                </div>
                <div className={`product-card`} onClick={handleProductItemClick}>
                    <div>
                        <img alt='wooden lights' src={WoodenLights} />
                        <p>Wooden Lights</p>
                    </div>
                </div>
            </div>
            
            <p className={`view-all-button`}>View All</p>
        </div>
    )
}

export default NewArrivalsSection;