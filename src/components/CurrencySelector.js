import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    };
    const selectStyle = {
        color: 'blue',
        backgroundColor: 'lightgray',
    };
    return (
        <div>
            <label htmlFor="currency-select">Currency:</label>
            <select id="currency-select" style={selectStyle} onChange={changeCurrency}>
                <option value="£">Pound (£)</option>
                <option value="$">Dollar ($)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};

export default CurrencySelector;