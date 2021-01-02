import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalContext';


const EachEvent = ({ items }) => {
    const { deleteEvent } = useContext(GlobalContext);

    return (
        <>
            <li>
                <span>{items.event}</span>
                <span>{items.time}</span>
                <button onClick={() => deleteEvent(items.id)} >Delete</button>
            </li>
        </>
    )
}

export default EachEvent
