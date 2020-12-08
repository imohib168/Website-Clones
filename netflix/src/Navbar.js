import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }

            return () => {
                window.removeEventListener("scroll")
            }
        })
    }, [])

    return (
        <header className={`navbar ${show && "navbar__black "}`}>
            <img
                className="navbar__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/255px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />

            {/* <button>Sign in</button> */}
        </header>
    )
}

export default Navbar;
