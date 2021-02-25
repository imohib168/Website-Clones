import React from 'react';
import {
    InfoSection,
    // Pricing
} from './../../components';
import { homeObjFour } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home

