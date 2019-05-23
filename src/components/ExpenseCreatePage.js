import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const ExpenseCreatePage = (props) => (
    <div>
        <h3> Create expense </h3>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense))
                props.history.push('/')
            }}
        />
    </div>
);


export default connect()(ExpenseCreatePage)