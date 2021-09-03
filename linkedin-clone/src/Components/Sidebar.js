import React from 'react'
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';

export const Sidebar = () => {

    const recentItem = (recentItem) => (
        <div className="sidebar__recentItems">
            <p className="sidebar__hash">#</p>
            <p>{recentItem}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Cover Image" />
                <Avatar className="sidebar__avatar" />
                <h2>Mohib Ismail</h2>
                <h4>imohib168@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                {/* Viewed Profile  */}
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">2,450</p>
                </div>
                {/* Connections */}
                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className="sidebar__statNumber">614</p>
                </div>
            </div>

            <div className="sidebar__premium">
                <p>Access exclusive tools & insights</p>
                <a href=""> <span classNam="sidebar__colorGold"></span> Try premium for free</a>
            </div>

            <div className="sidebar__myItems">
                <BookmarkIcon />
                <p>My Items</p>
            </div>

            <div className="sidebar__bottom">
                <p className="sidebar__followedHashtags">Followed Hashtags</p>
                {recentItem('ReactJS')}
                {recentItem('Programming')}
                {recentItem('Python')}
                {recentItem('C++')}
                {recentItem('Bootstrap')}
                {recentItem('Material-UI')}
            </div>
        </div>
    )
}
