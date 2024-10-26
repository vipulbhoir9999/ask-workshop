import React from 'react';
import './NewArrivalsSection.scss';
import HangingLights from '../../assets/images/hanging-lights.png';
import TableLamp from '../../assets/images/table-lamp.png';
import WoodenLights from '../../assets/images/wooden-lights.png';

const NewArrivalsSection = () => {

    return (
        <div className={`new-arrivals-section-main-container`}>
            <p className={`new-arrivals-title`}>New Arrivals</p>

            <div className={`products-card-container`}>
                <div className={`product-card`}>
                    <div>
                        <img alt='hanging lights' src={HangingLights} />
                        <p>Hanging Lights</p>
                    </div>
                </div>
                <div className={`product-card`}>
                    <div>
                        <img alt='table lamp' src={TableLamp} />
                        <p>Table Lamp</p>
                    </div>
                </div>
                <div className={`product-card`}>
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