import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Coin from './Coin';

// API
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&order=market_cap_desc&per_page=100&page=1&sparkline=false

const App = () => {

    const [coins, setCoins] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pkr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response => {
                setCoins(response.data);
            })
            .catch(error => console.log(error))
    }, [])

    const filteredCoins = coins.filter(coin => {
        return (
            coin.name.toLowerCase().includes(input.toLowerCase())
        )
    })

    return (
        <div className="coin__app">
            <div className="coin__search">
                <h1 className="coin__text">Search A Currency</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Search Currency"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        className="coin__input"
                    />
                </form>
            </div>
            {filteredCoins.map(coin => (
                <Coin
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    marketCap={coin.market_cap}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}
                />
            ))}
        </div>
    )
}

export default App;