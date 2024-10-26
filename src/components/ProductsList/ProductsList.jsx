import React, { useState } from 'react';
import './ProductsList.scss';
import HangingLights from '../../assets/images/hanging_lights.png';
import WoodenLamp from '../../assets/images/table_lamp.png'
import WoodenHanging from '../../assets/images/wooden_lights.png';
import ArtBoardCanvas from '../../assets/images/art_board_canvas.png';
import { useNavigate } from 'react-router-dom';

const ProductsList = () => {

    const navigate = useNavigate();

    const [selectedFilter, setSelectedFilter] = useState("All");

    const filters = [
        "All",
        "Art Products",
        "Home Decor",
        "Wooden Crockery"
    ];

    const products = [
        {
            id: 0,
            image: HangingLights,
            name: "Hanging Lights"
        },
        {
            id: 1,
            image: WoodenLamp,
            name: "Wooden Lamp"
        },
        {
            id: 2,
            image: WoodenHanging,
            name: "Wooden Hanging"
        },
        {
            id: 3,
            image: ArtBoardCanvas,
            name: "Art Board Canvas"
        },
        {
            id: 4,
            image: HangingLights,
            name: "Hanging Lights"
        },
        {
            id: 5,
            image: WoodenLamp,
            name: "Wooden Lamp"
        },
        {
            id: 6,
            image: WoodenHanging,
            name: "Wooden Hanging"
        },
        {
            id: 7,
            image: ArtBoardCanvas,
            name: "Art Board Canvas"
        },
    ]

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    }

    const handleProductListItemClick = () => {
        navigate("/products/productdetailpage");
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={`products-list-main-container`}>
            <div>
                <div className={`filters-container`}>
                    {
                        filters.map((filter, index) => {
                            return (
                                <div key={index} className={`${selectedFilter === filter ? 'active' : ''}`} onClick={() => handleFilterChange(filter)}>
                                    <p>{filter}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`products-list`}>
                    {
                        products.map(product => {
                            return (
                                <div className={`product`} key={product.id} onClick={handleProductListItemClick}>
                                    <div>
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <p>{product.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsList;