import React from 'react';
import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';
import { Feed } from './Components/Feed';
import { Widgets } from './Components/Widgets';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />

            <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
            </div>
        </div>
    );
}

export default App;
