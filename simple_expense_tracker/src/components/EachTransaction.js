import React, { useContext } from 'react';
import { Context } from '../context/TransactionContext';

const EachTransaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(Context);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            <span>{transaction.text}</span>
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}

export default EachTransaction;
