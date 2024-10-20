import React from 'react';
import './Header.scss';

const Header = () => {

    return (
        <header className={`main-header-container`}>
            <div className={`header-content-container`}>
                <div className={`header-title`}>
                    <p>Ask Enterprises</p>
                </div>
                <nav className={`header-nav-container`}>
                    <ul>
                        <li>Products</li>
                        <li>Catlogues</li>
                        <li>New Arrivals</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;