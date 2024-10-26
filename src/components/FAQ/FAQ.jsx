import React, { useState } from 'react';
import './FAQ.scss';

const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'What types of wooden products do you offer?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            question: 'How do you ensure the quality of your wood?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            question: 'Can I customize my wooden product?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            question: 'How can I track my order?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            question: 'How can I contact customer support?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`faq-section-main-container`}>
            <div>
                <p className={`faq-title`}>Frequently Asked Questions (FAQs)</p>
                <div className={`faq-accordian-container`}>
                    {
                        faqs.map((faq, index) => {
                            return (
                                <div
                                    className={"faq " + (activeIndex === index ? "open" : "") + " " + (index === faqs.length - 1 ? "margin-unset" : "")}
                                    key={index}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className="faq-question">{(index + 1) + ". " + faq.question}</div>
                                    <div className="faq-answer">{faq.answer}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQ;