import React from 'react';
import './Breadcrumb.scss';
import { useNavigate } from 'react-router-dom';

const Breadcrumb = () => {

    const navigate = useNavigate();

    const navigateTo = (page) => {
        navigate(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={`breadcrumb-main-container`}>
            <div>
                <p>
                    <span onClick={() => navigateTo("/")}>Home</span> / <span onClick={() => navigateTo("/products")}>Products</span> / <span className={`current-page`}>Art board canvas</span>
                </p>
            </div>
        </div>
    )
}

export default Breadcrumb;