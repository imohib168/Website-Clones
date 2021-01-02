import React, { useState, useContext } from 'react'
import { Context } from '../context/TransactionContext';


const AddNewTransaction = () => {

    const { addTransaction } = useContext(Context);
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const submitData = (e) => {
        e.preventDefault();

        const newTransaction = {
            text,
            amount: Number(amount),
            id: Math.floor(Math.random() * 100000000),
        }

        addTransaction(newTransaction);

        setText("");
        setAmount(0);
    }

    return (
        <div className="AddNewTransaction">
            <h4>Add New Transaction</h4>
            <div className="line"></div>
            <form onSubmit={submitData} className="TransactionForm">
                <div>
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter text..." />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddNewTransaction;
