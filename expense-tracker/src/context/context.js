import React, { createContext, useReducer } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
    { amount: 1200, category: "Deposits", type: "Income", date: "2020-12-29", id: "5dd5a8f2-8d6e-4b9b-999a-a444b05c72a9" }, { "amount": 120, "category": "Entertainment", "type": "Expense", "date": "2020-12-30", "id": "59f451fb-2f85-404c-9ddd-c106023db239" }
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const balance = transactions.reduce((acc, currVal) => {
        return (
            currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount
        )
    }, 0)

    // Action Creators
    const deleteTransaction = (id) => {
        dispatch(
            {
                type: 'DELETE_TRANSACTION',
                payload: id
            }
        )
    }

    const addTransaction = (transaction) => {
        dispatch(
            {
                type: 'ADD_TRANSACTION',
                payload: transaction
            }
        )
    }
    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )

}
