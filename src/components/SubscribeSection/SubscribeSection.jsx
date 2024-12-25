import React, { useState } from 'react';
import './SubscribeSection.scss';

const SubscribeSection = () => {

    const [email, setEmail] = useState('');

    return (
        <div className={`subscribe-section-main-container`}>
            <p className={`description`}>"Crafting innovation from nature’s finest. Discover the beauty and potential of wood with our startup solutions."</p>

            {/* <div>
                <p>subscribe to us</p>
                <div>
                    <input type='text' placeholder='Email Id' value={email} onInput={e => setEmail(e.target.value)} />
                    <button>Sign up</button>
                </div>
            </div> */}
        </div>
    )
}

export default SubscribeSection;