import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner'
import Navbar from './Navbar'

import request from './request'

function App() {
    return (
        <div className="App">

            <Navbar />
            <Banner />

            <Row isLargeRow title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} />
            <Row title="Trending Now" fetchUrl={request.fetchTrending} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={request.fecthRomanceMovies} />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        </div>
    );
}

export default App;
