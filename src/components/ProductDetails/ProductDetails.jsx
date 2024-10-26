import React from 'react';
import './ProductDetails.scss';
import ProductPreviewImage from '../../assets/images/product_preview_image.png';
import ProductThumbnail from '../../assets/images/product_thumbnail.png';
import ProductThumbnail1 from '../../assets/images/product_thumbnail_1.png';

const ProductDetails = () => {

    return (
        <div className={`product-details-main-container`}>
            <div>
                <div className={`product-image-container`}>
                    <div className={`image-preview`}>
                        <img src={ProductPreviewImage} alt='preview' />
                    </div>
                    <div className={`image-list`}>
                        <img src={ProductThumbnail} alt='thumbnail 1' />
                        <img src={ProductThumbnail1} alt='thumbnail 2' />
                        <img src={ProductThumbnail1} alt='thumbnail 3' />
                    </div>
                </div>
                <div className={`product-details-container`}>
                    <p className={`product-title`}>5 pack of 50x60cm Artist Blank Stretched Canvas Art White Range oil Acrylic Wood</p>

                    <div className={`quantity-container`}>
                        <p>Quantity</p>
                        <select>
                            <option value={'1'}>1</option>
                            <option value={'2'}>2</option>
                            <option value={'3'}>3</option>
                            <option value={'4'}>4</option>
                        </select>
                    </div>

                    <p className={`product-description-title`}>Product Description</p>
                    <p className={`product-description`}>Elevate your creative projects with our premium Art Board, designed for artists and creatives who demand the best.</p>
                    <p>Key Features:</p>
                    <ul>
                        <li>
                            <p>Premium Quality: Made from top-grade, acid-free materials that resist warping and ensure long-lasting durability.</p>
                        </li>
                        <li>
                            <p>
                                Smooth Surface: Ideal for both detailed and broad strokes, providing a consistent texture for flawless application of various art mediums.</p>
                        </li>
                    </ul>
                    <p>Available Dimensions:</p>
                    <ul className={`dimensions`}>
                        <li>
                            <p>8" x 10" (20.3 cm x 25.4 cm)</p>
                        </li>
                        <li>
                            <p>11" x 14" (27.9 cm x 35.6 cm)</p>
                        </li>
                    </ul>
                    <p>Price:</p>
                    <ul>
                        <li>
                            <p>[Price per unit]</p>
                        </li>
                    </ul>
                    <p>Order Now: Bring your vision to life with our Art Board, and experience the difference that quality makes.</p>
                    <p>Note: For best results, store the board in a cool, dry place away from direct sunlight.</p>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;