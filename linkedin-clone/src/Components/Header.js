import React from 'react';
import './Header.css';

// Search Icon - Material-UI
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';

// Import Component
import { HeaderOption } from './HeaderOption';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <img src="https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png" alt="LinkedIn Icon" />
                    <div className="header__search">
                        <SearchIcon />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title='Home' />
                    <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                    <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                    <HeaderOption Icon={ChatIcon} title='Messaging' />
                    <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                    <HeaderOption avatar="https://scontent.fkhi12-1.fna.fbcdn.net/v/t1.6435-9/134149614_718407435752188_3612673059708564077_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEvixHKfyRAFxqBIcXVlATpsWH73Vp8NbixYfvdWnw1uOppM0PDLs__MRns2ew-8p_hFLKCsnF4TY0RNjJVU7z9&_nc_ohc=7e2jz1d_OzsAX9F6-F-&tn=MuPiLMUbwp9uwj0Z&_nc_ht=scontent.fkhi12-1.fna&oh=9815d49930b5eb143dea661fec486fdf&oe=60DD4B5C" title='Me' />
                </div>
            </div>
        </div>
    )
}