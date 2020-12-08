import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Banner.css'
// import request from './request'


const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios("https://api.themoviedb.org/3/trending/all/week?api_key=062066ac553be56fa906b80ddc6ee0da&language=en-US");
            setMovie(req.data.results[
                Math.floor(Math.random() * req.data.results.length - 1)
            ])
        }
        fetchData();
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <>
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url(${base_url}${movie.backdrop_path})`,
                backgroundPosition: "center center",
            }}>
                <div className="banner__Content">

                    <div className="banner__title">
                        <h1>{movie.name || movie.title || movie.original_name}</h1>
                    </div>

                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>


                    <h3 className="banner__description">
                        {truncate(movie.overview, 150)}
                    </h3>
                </div>

                <div className="banner--fadeBottom" ></div>
            </header>

        </>
    )
}

export default Banner;
