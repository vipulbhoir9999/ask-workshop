import React, { useState, useEffect, } from 'react';
import './ProductDetails.scss';
import products from '../../mdm/products.json';

const ProductDetails = (props) => {

    const [productDetails, setProductDetails] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [dimensions, setDimensions] = useState([]);
    const [prices, setPrices] = useState([]);
    const [keyFeatures, setKeyFeatures] = useState([]);

    useEffect(() => {
        const productDetails = products.find(item => item.ID == props.productId);
        setProductDetails(productDetails);
        setDimensions(productDetails["Dimensions (comma separated)"].split(","));
        setPrices(productDetails["Prices (comma separated)"].split(","));
        const description = productDetails.Description.split("\n");
        let keyFeatures = [];
        let i = 6;
        while (description[i]) {
            keyFeatures.push(description[i]);
            i += 2;
        }
        setKeyFeatures(keyFeatures);
    }, [props.productId]);

    return (
        <div className={`product-details-main-container`}>
            <div>
                <div className={`product-image-container`}>
                    <div className={`image-preview`}>
                        <img src={selectedImage ? selectedImage : productDetails ? productDetails["Images (3 comma separated image links)"].split(",")[0] : undefined} alt='preview' />
                    </div>
                    <div className={`image-list`}>
                        <img
                            onClick={() => setSelectedImage(productDetails["Images (3 comma separated image links)"].split(",")[0])}
                            src={productDetails ? productDetails["Images (3 comma separated image links)"].split(",")[0] : undefined}
                            alt='thumbnail 1' />
                        <img
                            onClick={() => setSelectedImage(productDetails["Images (3 comma separated image links)"].split(",")[1])}
                            src={productDetails ? productDetails["Images (3 comma separated image links)"].split(",")[1] : undefined}
                            alt='thumbnail 2' />
                        <img
                            onClick={() => setSelectedImage(productDetails["Images (3 comma separated image links)"].split(",")[2])}
                            src={productDetails ? productDetails["Images (3 comma separated image links)"].split(",")[2] : undefined}
                            alt='thumbnail 3' />
                    </div>
                </div>
                <div className={`product-details-container`}>
                    <p className={`product-title`}>{productDetails?.Name || ""}</p>

                    {/* <div className={`quantity-container`}>
                        <p>Quantity</p>
                        <select>
                            <option value={'1'}>1</option>
                            <option value={'2'}>2</option>
                            <option value={'3'}>3</option>
                            <option value={'4'}>4</option>
                        </select>
                    </div> */}

                    <p className={`product-description-title`}>{productDetails?.Description?.split("\n")[0] || ""}</p>
                    <p className={`product-description`}>{productDetails?.Description?.split("\n")[2] || ""}</p>
                    <p>{productDetails?.Description?.split("\n")[4] || ""}</p>
                    <ul>
                        {
                            keyFeatures.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <p>{item}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <p>Available Dimensions with Price:</p>
                    <ul className={`dimensions`}>
                        {
                            dimensions.map((item, index) =>
                                <li key={index}>
                                    <p>{item} : Rs.{prices[index].trim()}/-</p>
                                </li>
                            )
                        }
                    </ul>
                    {/* <p>Price:</p>
                    <ul>
                        <li>
                            <p>[Price per unit]</p>
                        </li>
                    </ul> */}
                    {/* <p>Enquire Now: Bring your vision to life with our Art Board, and experience the difference that quality makes.</p> */}
                    {/* <p>Note: For best results, store the board in a cool, dry place away from direct sunlight.</p> */}
                    <button onClick={() => {
                        window.scrollTo({
                            top: document.documentElement.scrollHeight,
                            behavior: "smooth", // Smooth scrolling
                        });
                    }}>Enquire Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;