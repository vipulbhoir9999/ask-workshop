import React, { useState, useEffect, } from 'react';
import './ProductsList.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import products from '../../mdm/products.json';
import Arrow from '../../assets/icons/arrow-right.png';

const ProductsList = () => {

    const navigate = useNavigate();

    const [selectedFilter, setSelectedFilter] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [pages, setPages] = useState(15);
    const [activePage, setActivePage] = useState(1);

    const [searchParams, setSearchParams] = useSearchParams();

    const filters = [
        "All",
        "Wooden Crockery",
        "Home Decor",
        "Art Accessories",
        "Wooden Art",
    ];

    const filterProducts = (filter) => {
        return products.filter(item => item.Category == filter);
    }

    const setQueryParam = (filter) => {
        searchParams.set("filter", filter); // Add or update query param
        setSearchParams(searchParams); // Update the URL
    };

    const renderPageNumbers = (pages) => {
        const pageNums = [];
        let isFirstDotAdded = false;
        let isSecondDotAdded = false;
        for (let i = 1; i <= pages; i++) {
            if (i == 1 ||
                i == 2 ||
                i == pages - 1 ||
                i == pages ||
                activePage - 1 == i ||
                activePage == i ||
                activePage + 1 == i
            ) {
                pageNums.push(
                    <div onClick={() => {
                        if (i != activePage) {
                            setActivePage(i);
                        }
                    }} className={`page-number ${activePage == i ? 'active' : ''}`}>
                        <p>
                            {i}
                        </p>
                    </div>
                );
            } else if (!isFirstDotAdded || !isSecondDotAdded) {
                if (i < activePage && !isFirstDotAdded) {
                    isFirstDotAdded = true;
                    pageNums.push(
                        <div className={`page-dots`}>
                            <p>
                                ...
                            </p>
                        </div>
                    )
                } else if (i > activePage && !isSecondDotAdded) {
                    isSecondDotAdded = true;
                    pageNums.push(
                        <div className={`page-dots`}>
                            <p>
                                ...
                            </p>
                        </div>
                    )
                }
            }
        }
        return pageNums;
    }

    useEffect(() => {
        const paramValue = searchParams.get("filter");
        console.log(paramValue);
        if (paramValue) {
            setSelectedFilter(paramValue);
        }
    }, []);

    const calculatePages = (productCount) => {
        return Math.ceil(productCount / 8);
    }

    const filterByPage = (products) => {
        const max = activePage * 8 - 1;
        const min = max - 7;
        const filteredByPage = [];
        console.log(min, max);
        for (let i = min; i <= max && i < products.length; i++) {
            filteredByPage.push(products[i]);
        }
        return filteredByPage;
    }

    useEffect(() => {
        let filteredProducts = [];
        switch (selectedFilter) {
            case "All":
                filteredProducts = products;
                setPages(calculatePages(filteredProducts.length));
                setFilteredProducts(filterByPage(filteredProducts));
                break;
            case "Wooden Crockery":
                filteredProducts = filterProducts("Wooden Crockery");
                setPages(calculatePages(filteredProducts.length))
                setFilteredProducts(filterByPage(filteredProducts));
                break;
            case "Home Decor":
                filteredProducts = filterProducts("Home Decor");
                setPages(calculatePages(filteredProducts.length));
                setFilteredProducts(filterByPage(filteredProducts));
                break;
            case "Art Accessories":
                filteredProducts = filterProducts("Art Accessories");
                setPages(calculatePages(filteredProducts.length));
                setFilteredProducts(filterByPage(filteredProducts));
                break;
            case "Wooden Art":
                filteredProducts = filterProducts("Wooden Art");
                setPages(calculatePages(filteredProducts.length));
                setFilteredProducts(filterByPage(filteredProducts));
                break;
            default:
                setPages(0);
                setFilteredProducts([]);
                console.log("Invalid Filter Selected");
        }
    }, [selectedFilter, activePage]);

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        setQueryParam(filter);
        setActivePage(1);
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
                {
                    pages ?
                        <div className={`products-list`}>
                            {
                                filteredProducts.map(product => {
                                    return (
                                        <div className={`product`} key={product.ID} onClick={handleProductListItemClick}>
                                            <div>
                                                <img src={product["Images (3 comma separated image links)"].split(",")[0].trim()} alt={product.Name} />
                                            </div>
                                            <p>{product.Name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className={`empty-products`}>
                            <p>No results found for selected filter.</p>
                        </div>
                }
                {
                    pages ?
                        <div className={`pagination-container`}>
                            <div onClick={() => {
                                if (activePage > 1) {
                                    setActivePage(val => val - 1);
                                }
                            }} className={`prev-button ${activePage == 1 ? 'disabled' : ''}`}>
                                <img src={Arrow} alt='arrow' />
                                <p>Prev</p>
                            </div>
                            <div className={`pages`}>
                                {renderPageNumbers(pages)}
                            </div>
                            <div onClick={() => {
                                if (activePage < pages) {
                                    setActivePage(val => val + 1);
                                }
                            }} className={`next-button ${activePage == pages ? 'disabled' : ''}`}>
                                <p>Next</p>
                                <img src={Arrow} alt='arrow' />
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}

export default ProductsList;