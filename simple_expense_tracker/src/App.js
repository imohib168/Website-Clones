import React from 'react';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionHistory from './components/TransactionHistory';
import AddNewTransaction from './components/AddNewTransaction';

import './App.css';

const App = () => {
    return (
        <main className="app">
            <Header />
            <Balance />
            <IncomeExpense />
            <TransactionHistory />
            <AddNewTransaction />
        </main>
    )
}

export default App;
