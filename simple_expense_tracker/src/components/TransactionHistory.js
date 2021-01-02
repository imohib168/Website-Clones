import React, { useState, useContext } from 'react'
import EachTransaction from './EachTransaction';
import { Context } from '../context/TransactionContext';

const TransactionHistory = () => {

    const { transactions } = useContext(Context);
    // console.log(transactions);

    return (
        <div>
            <h4>History</h4>
            <div className="line"></div>
            <ul className="list">
                {transactions.map(transaction => {
                    return (
                        <EachTransaction key={transaction.id} transaction={transaction} />
                    )
                })}
            </ul>
        </div>
    )
}

export default TransactionHistory;
