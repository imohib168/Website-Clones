import React, { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer'

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
    // { id: 1, text: "Cash", amount: 500 },
    // { id: 2, text: "Lottery", amount: 200 },
    // { id: 3, text: "bill", amount: -1150 },
    // { id: 4, text: "Rent", amount: -350 },
];

export const Context = createContext(initialState);

export const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)
    // console.log("State===>", state);

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                text: transaction.text,
                amount: transaction.amount,
                id: transaction.id,
            }
        })
    }
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
        <Context.Provider value={{
            transactions: state,
            addTransaction,
            deleteTransaction,
        }}>
            {children}
        </Context.Provider>
    )
}