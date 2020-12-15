import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
                alt=""
            />


            <div className="home__row">
                <Product
                    id="72354723"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id="72354723"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                    price={1000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>


            <div className="home__row">
                <Product
                    id="72354723"
                    title="Blink Mini – Compact indoor plug-in smart security camera, 1080 HD video, motion detection, night vision, Works with Alexa – 1 camera"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31Ce3B42urL._AC_SX184_.jpg"
                />
                <Product
                    id="72354723"
                    title="Google Nest Cam Indoor - Wired Indoor Camera for Home Security - Control with Your Phone and Get Mobile Alerts - Surveillance Camera with 24/7 Live Video and Night Vision"
                    price={129}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31hqGmUgrsL._AC_US327_FMwebp_QL65_.jpg"
                />
                <Product
                    id="72354723"
                    title="TP-Link AC1900 Smart WiFi Router (Archer A8) - High Speed MU-MIMO Wireless Router, Dual Band Router for Wireless Internet, Gigabit, Supports Guest WiFi, Beamforming, Smart Connect"
                    price={79}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/31th+y2MIGL._AC_US327_FMwebp_QL65_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="72354723"
                    title="TCL 32' 3-Series 720p ROKU Smart TV - 32S335"
                    price={128}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41cs-of+c-L._AC_US327_FMwebp_QL65_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
