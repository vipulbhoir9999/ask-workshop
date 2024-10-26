import React from 'react';
import './FeedbackSection.scss';
import FeedbackImage from '../../assets/images/feedback_image.png';
import Instagram from '../../assets/icons/Instagram.png';
import Facebook from '../../assets/icons/Facebook.png';

const FeedbackSection = () => {

    return (
        <div className={`feedback-section-main-container`}>
            <div>
                <img className={`feedback-image`} alt='feedback' src={FeedbackImage} />
                <div className={`feedback-content-container`}>
                    <p className={`feedback-title`}>Drop Your Feedback to us</p>
                    <p className={`feedback-description`}>"Your insights are the foundation of our progress. Share your experience and help us build better wooden solutions."</p>
                    <div className={`mails-container`}>
                        <a href='mailto:sales@askworkshop.in'>sales@askworkshop.in</a>
                        <a href='mailto:aniket@askworkshop.in'>aniket@askworkshop.in</a>
                    </div>
                    <div className={`follow-container`}>
                        <div>
                            <p>Follow us</p>
                            <a target='_blank' rel='noreferrer' href='https://google.com'>
                                <img src={Instagram} alt='instagram' />
                            </a>
                            <a target='_blank' rel='noreferrer' href='https://google.com'>
                                <img src={Facebook} alt='facebook' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackSection;