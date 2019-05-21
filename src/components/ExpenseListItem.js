import React from 'react';


const ExpenseListItem = ({note, description, amount}) => (
    <div>
        <h3>Note: {note}</h3>
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
    </div>
);

export default ExpenseListItem;