import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const updateBudget = () => {
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (newBudget >= totalExpenses) {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        } else {
            alert("You cannot reduce the budget value lower than the spending");
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                onBlur={updateBudget} 
            />
        </div>
    );
};

export default Budget;