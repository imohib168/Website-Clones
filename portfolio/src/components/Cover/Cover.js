import React from 'react';
import Button from '../Button/Button';

import './Cover.css';

const Cover = () => {
    return (
        <div className="cover-container">
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="cover-btns">
                <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Cover;