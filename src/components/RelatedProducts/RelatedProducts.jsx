import React, { useEffect, useState } from 'react';
import './RelatedProducts.scss';
import products from '../../mdm/products.json';
import { useNavigate } from 'react-router-dom';

const RelatedProducts = (props) => {

    const navigate = useNavigate();

    const [relatedProducts, setRelatedProducts] = useState([]);
    const [relatedProductDetails, setRelatedProductsDetails] = useState([]);
    const [limitedRelatedProducts, setLimitedRelatedProducts] = useState([]);
    const [isViewMore, setIsViewMore] = useState(false);
    const [renderProducts, setRenderProducts] = useState([]);

    useEffect(() => {
        const productDetails = products?.find(item => item.ID == props.productId);
        if (productDetails) {
            let relatedProducts = productDetails["Related Products (Add related products id - comma separated)"];
            if (relatedProducts && relatedProducts != "nan") {
                relatedProducts = relatedProducts?.split(",");
                setRelatedProducts(relatedProducts);

                let relatedProductDetails = [];
                relatedProducts.map(item => {
                    relatedProductDetails.push(products.find(product => product.ID == item.trim()));
                })
                let limitedRelatedProducts = [];
                for (let i = 0; i < 4 && i < relatedProductDetails.length; i++) {
                    limitedRelatedProducts.push(relatedProductDetails[i]);
                }
                setRelatedProductsDetails(relatedProductDetails);
                setLimitedRelatedProducts(limitedRelatedProducts);
            }
        }
    }, [props.productId]);

    useEffect(() => {
        if (isViewMore) {
            setRenderProducts(relatedProductDetails);
        } else {
            setRenderProducts(limitedRelatedProducts);
        }
    }, [isViewMore, limitedRelatedProducts, relatedProductDetails]);

    const handleProductListItemClick = (productId) => {
        navigate(`/products/${productId}`);
        props.setProductId(productId);
        setIsViewMore(false);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={`related-products-main-container`}>
            {
                relatedProducts.length != 0 ?
                    <div>
                        <p className={`related-products-title`}>Related Products</p>

                        <div className={`products-list`}>
                            {
                                renderProducts.map(product => {
                                    return (
                                        <div className={`product`} key={product.ID} onClick={() => handleProductListItemClick(product.ID)}>
                                            <div>
                                                <img src={product["Images (3 comma separated image links)"].split(",")[0].trim()} alt={product.Name} />
                                            </div>
                                            <p>{product.Name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            relatedProductDetails.length > 4 ?
                                <p onClick={() => setIsViewMore(val => !val)} className={`view-all-button`}>{isViewMore ? "View Less" : "View More"}</p>
                                : null
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export default RelatedProducts;