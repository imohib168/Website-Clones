import { Avatar } from '@material-ui/core';
import React from 'react';
import './Feed.css';

export const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__inputSection">
                    <Avatar className="feed__avatar" />
                    <div className="feed__input">
                        <input className="feed__textField" type="text" placeholder="Start a post" />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
