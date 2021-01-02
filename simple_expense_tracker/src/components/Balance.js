import React, { useContext } from 'react';
import { Context } from '../context/TransactionContext';

const Balance = () => {

    const { transactions } = useContext(Context);

    const amount = transactions.map((transaction) => transaction.amount);
    const total = amount.reduce((acc, currVal) => acc += currVal, 0).toFixed(2);

    return (
        <div className="balance">
            <span className="balance-heading">Your Balance</span>
            <h2 className="balance-amount">${total}</h2>
        </div>
    )
}

export default Balance;