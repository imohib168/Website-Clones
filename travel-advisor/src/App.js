import React, { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

import { CssBaseline, Grid } from '@material-ui/core'

import { getPlacesData } from './api';
const App = () => {

    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude })
        })
    }, []);

    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
            .catch(err => console.log(err))
    }, [coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={places} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        places={places}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App
