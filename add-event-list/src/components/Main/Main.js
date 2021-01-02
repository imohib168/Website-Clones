import React, { useState, useContext } from 'react';
import './Main.css';

import EachEvent from './EachEvent';

import { GlobalContext } from '../../context/GlobalContext';

const Main = () => {

    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');

    const { events, addEvent } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        if (event === "" && time === "") {
            alert("Kindly Enter the Event...")
        } else {
            const newEvent = {
                id: Math.floor(Math.random() * 10000000),
                event,
                time
            }

            addEvent(newEvent);
            setEvent("");
            setTime("");
        }
    }

    return (
        <div className="container">
            <h1 className="eventHeading">Add Events</h1>
            <div className="eventBody">
                <ul className="eventList">
                    {events.map(event => (
                        <EachEvent key={event.id} items={event} />
                    ))}
                </ul>
                <div className="eventForm">
                    <form onSubmit={onSubmit}>
                        <input value={event} onChange={(e) => setEvent(e.target.value)} type="text" placeholder="Event Name" />
                        <input value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder="Time" />
                        <button>Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main
