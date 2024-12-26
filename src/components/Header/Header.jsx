import React, { useState, useEffect } from 'react';
import './Header.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import Hamburger from '../../assets/icons/hamburger.png';
import Close from '../../assets/icons/close.png';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            navigate("/");
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    const navigateTo = (page) => {
        navigate(page);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const div = document.getElementById("header-height");
        const divHeight = div.offsetHeight; // Get the height of the div
        setHeaderHeight(divHeight);
    }, []);

    const renderNavs = () => {
        return <nav className={`header-nav-container`}>
            <ul>
                <li onClick={() => {
                    setMenuOpen(false);
                    navigateTo("/products");
                }}>
                    Products
                </li>
                <li onClick={() => {
                    setMenuOpen(false);
                    navigateTo("/catalogues");
                }}>
                    Catlogues
                </li>
                <li onClick={() => {
                    setMenuOpen(false);
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: "smooth", // Smooth scrolling
                    });
                }}>
                    Contact Us
                </li>
            </ul>
        </nav>
    }

    return (
        <header className={`main-header-container`}>
            <div id={`header-height`} className={`header-content-container`}>
                <div className={`header-title`} onClick={handleLogoClick}>
                    <p>Ask Enterprises</p>
                </div>
                <div onClick={() => setMenuOpen(val => !val)} className={`hamburger-container`}>
                    <img src={menuOpen ? Close : Hamburger} alt='hamburger' />
                </div>
                {renderNavs()}
            </div>
            <div
                className={`menu ${menuOpen ? "menu-open" : ""}`}
                style={menuOpen ? {
                    top: headerHeight,
                } : {}}>
                {renderNavs()}
            </div>
        </header>
    )
}

export default Header;