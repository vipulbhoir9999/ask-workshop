import React from 'react';
import './RelatedProducts.scss';
import WoodenCrockery from '../../assets/images/wooden_crockery.png';
import HomeDecor from '../../assets/images/home_decor.png';
import ArtAccessories from '../../assets/images/art_accessories.png';
import WoodenArt from '../../assets/images/wooden_art.png';

const RelatedProducts = () => {

    return (
        <div className={`related-products-main-container`}>
            <div>
                <p className={`related-products-title`}>Related Products</p>

                <div className={`categories-container`}>
                    <div className={`category`}>
                        <img alt='wooden crockery' src={WoodenCrockery} />
                        <p>Wooden Crockery</p>
                    </div>
                    <div className={`category`}>
                        <img alt='home decor' src={HomeDecor} />
                        <p>Home Decor</p>
                    </div>
                    <div className={`category`}>
                        <img alt='art accessories' src={ArtAccessories} />
                        <p>Art Accessories</p>
                    </div>
                    <div className={`category`}>
                        <img alt='wooden art' src={WoodenArt} />
                        <p>Wooden Art</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts;