import React from 'react';
import './Footer.scss';
import Instagram from '../../assets/icons/Instagram.png';
import Facebook from '../../assets/icons/Facebook.png';

const Footer = () => {

    return (
        <footer className={`footer-main-container`}>
            <div>
                <p className={`logo-text`}>ASK Enterprises</p>
                <div className={`footer-grid-container`}>
                    <div className={`contact-details-container`}>
                        <p>Contact Us</p>

                        <p className={`subtitle`}>Address</p>
                        <p className={`address`}>Savali, At. Chandrapada, Near Auto Rikshaw Stand, Post. Juchandra, Naigaon East, Vasai, Palghar 401208</p>

                        <p className={`subtitle`}>Email</p>
                        <div className={`emails-container`}>
                            <a href='mailto:sales@askworkshop.in'>sales@askworkshop.in</a>
                            <a href='mailto:aniket@askworkshop.in'>aniket@askworkshop.in</a>
                        </div>

                        <p className={`subtitle`}>Whatsapp</p>
                        <div className={`whatsapp-numbers-container`}>
                            <a target='_blank' rel='noreferrer' href='https://wa.me/919876543210'>+91 9876543210</a>
                            <a target='_blank' rel='noreferrer' href='https://wa.me/919876543211'>+91 9876543211</a>
                        </div>

                        <p className={`copyright-text`}>Copyright 2024 ASK Enterprises</p>
                    </div>
                    {/* <div className={`quick-links-container`}>
                        <p>Quick links</p>

                        <div className={`links`}>
                            <a href='/ourstory' className={`subtitle`}>Our Story</a>
                            <a href='/contactus' className={`subtitle`}>Contact us</a>
                            <a href='/portfolio' className={`subtitle`}>Portfolio</a>
                            <a href='/partnerwithus' className={`subtitle`}>Partner with us</a>
                            <a href='/termsandservices' className={`subtitle`}>Terms and services</a>
                        </div>
                    </div>
                    <div className={`policy-container`}>
                        <p>Policy</p>

                        <div className={`links`}>
                            <a href='/privacypolicy' className={`subtitle`}>Privacy Policy</a>
                            <a href='/refundpolicy' className={`subtitle`}>Refund Policy</a>
                            <a href='/shippingpolicy' className={`subtitle`}>Shipping Policy</a>
                            <a href='/termsofservice' className={`subtitle`}>Terms of Service</a>
                        </div>
                    </div> */}
                    <div className={`follow-container`}>
                        <p>Follow us</p>

                        <div>
                            <a href='https://google.com' target='_blank' rel='noreferrer'>
                                <img src={Instagram} alt='instagram' />
                            </a>
                            <a href='https://google.com' target='_blank' rel='noreferrer'>
                                <img src={Facebook} alt='facebook' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;