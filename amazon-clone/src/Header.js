import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketTwoToneIcon from '@material-ui/icons/ShoppingBasketTwoTone';
import { useStateValue } from './StateProvider'

function Header() {

    const [{ basket }] = useStateValue();
    console.log(basket);

    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                    alt=""
                />
            </Link>

            <div className="header__searchBox">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login" className="heaedr__link">
                    <div className="header__option">
                        <span className="header__option01">Hello Mohib</span>
                        <span className="header__option02">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="heaedr__link">
                    <div className="header__option">
                        <span className="header__option01">Ruturns</span>
                        <span className="header__option02">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="heaedr__link">
                    <div className="header__option">
                        <span className="header__option01">Your</span>
                        <span className="header__option02">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="heaedr__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketTwoToneIcon />
                        <span className="header__option02 header__count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
