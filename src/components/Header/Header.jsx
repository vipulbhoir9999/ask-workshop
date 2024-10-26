import React from 'react';
import './Header.scss';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

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

    return (
        <header className={`main-header-container`}>
            <div className={`header-content-container`}>
                <div className={`header-title`} onClick={handleLogoClick}>
                    <p>Ask Enterprises</p>
                </div>
                <nav className={`header-nav-container`}>
                    <ul>
                        <li onClick={() => navigateTo("/products")}>
                            Products
                        </li>
                        <li onClick={() => navigateTo("/catalogues")}>
                            Catlogues
                        </li>
                        <li onClick={() => navigateTo("/newarrivals")}>
                            New Arrivals
                        </li>
                        <li onClick={() => navigateTo("/login")}>
                            Login
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;