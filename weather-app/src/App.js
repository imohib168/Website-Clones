import React, { useState, useEffect } from 'react';

const App = () => {

    const [post, setPost] = useState({
        weather: [{}],
        main: {},
    });
    // console.log();
    const [cityName, setCityName] = useState("karachi");

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=901d672d14c778eefb41af3fd3871f1f&units=metric`);
        const data = await response.json();

        if (!data) {
            return "Loading..."
        } else {
            setPost(data);
        }

        setCityName("");
    }

    return (
        <div>

            <div>
                {post ? (
                    <p>
                        {post.name} <br />
                        {post.timezone} <br />
                        {post.main.humidity} <br />
                        {!post.weather[0].main ? null : post.weather[0].main}
                    </p>
                ) : "Loading..."}
            </div>

            <input type="text" value={cityName} onChange={(e) => setCityName(e.target.value)} />
            <button onClick={loadData} >Change data</button>
        </div>
    )
}

export default App;
