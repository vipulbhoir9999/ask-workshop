import React from 'react';
import './ShopCategoriesSection.scss';
import WoodenCrockery from '../../assets/images/wooden_crockery.png';
import HomeDecor from '../../assets/images/home_decor.png';
import ArtAccessories from '../../assets/images/art_accessories.png';
import WoodenArt from '../../assets/images/wooden_art.png';
import { useNavigate, } from 'react-router-dom';

const ShopCategoriesSection = () => {

    const navigate = useNavigate();

    const handleCategoryClick = (link) => {
        navigate(link);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={`shop-by-categories-section-main-container`}>
            <p className={`shop-by-categories-description-text`}>"Create a home that tells your story. Explore our exquisite range of decor to find pieces that reflect your style and elevate your living space."</p>

            <p className={'shop-by-category-title'}>Shop By Category</p>

            <div className={`categories-container`}>
                <div onClick={() => handleCategoryClick("/products?filter=Wooden+Crockery")} className={`category`}>
                    <img alt='wooden crockery' src={WoodenCrockery} />
                    <p>Wooden Crockery</p>
                </div>
                <div onClick={() => handleCategoryClick("/products?filter=Home+Decor")} className={`category`}>
                    <img alt='home decor' src={HomeDecor} />
                    <p>Home Decor</p>
                </div>
                <div onClick={() => handleCategoryClick("/products?filter=Art+Accessories")} className={`category`}>
                    <img alt='art accessories' src={ArtAccessories} />
                    <p>Art Accessories</p>
                </div>
                <div onClick={() => handleCategoryClick("/products?filter=Wooden+Art")} className={`category`}>
                    <img alt='wooden art' src={WoodenArt} />
                    <p>Wooden Art</p>
                </div>
            </div>
        </div>
    )
}

export default ShopCategoriesSection;