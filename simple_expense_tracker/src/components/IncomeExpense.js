import React, { useContext } from 'react';
import { Context } from '../context/TransactionContext';


const IncomeExpense = () => {
    const { transactions } = useContext(Context);

    const amounts = transactions.map(transactions => transactions.amount);

    const Income = amounts.filter((positiveAmount) => positiveAmount > 0).reduce((acc, currVal) => (acc += currVal), 0).toFixed(2);
    const Expense = amounts.filter((negativeAmount) => negativeAmount < 0).reduce((acc, currVal) => (acc += currVal), 0 * -1).toFixed(2);

    return (
        <div className="IncomeExpense">
            <section className="Income">
                <h4>Income</h4>
                <p>${Income}</p>
            </section>
            <section className="Expense">
                <h4>Expense</h4>
                <p>${Expense}</p>
            </section>
        </div>
    )
}

export default IncomeExpense;
