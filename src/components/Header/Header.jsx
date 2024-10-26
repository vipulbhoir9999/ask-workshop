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
        }
    }

    return (
        <header className={`main-header-container`}>
            <div className={`header-content-container`}>
                <div className={`header-title`} onClick={handleLogoClick}>
                    <p>Ask Enterprises</p>
                </div>
                <nav className={`header-nav-container`}>
                    <ul>
                        <li>
                            <a href='/products'>Products</a>
                        </li>
                        <li>
                            <a href="/catalogues">Catlogues</a>
                        </li>
                        <li>
                            <a href="/newarrivals">New Arrivals</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;