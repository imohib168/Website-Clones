import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import { GlobalProvider } from './context/GlobalContext';

ReactDOM.render(
    <GlobalProvider>
        <App />
    </GlobalProvider>,
    document.getElementById("root")
);