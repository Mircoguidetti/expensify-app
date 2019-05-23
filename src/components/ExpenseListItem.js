import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch, id, note, description, amount}) => (
    <div>
        <Link to={`/edit/${id}`}> {description}</Link>
        <p>Note: {note}</p>
        <p>Amount: {amount}</p>
        <button
            onClick={() => {
                dispatch(removeExpense({id}))
            }}
        >Remove</button>
    </div>
);



export default connect()(ExpenseListItem);