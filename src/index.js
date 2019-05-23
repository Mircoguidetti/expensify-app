import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import IndexRouter from './routers/IndexRouter';
import { addExpense } from './actions/expenses';


const store = configureStore()

store.dispatch(addExpense({note:'Bought coffe for the week', description:'Coffee', amount:'1000', createdAt:3000}))
store.dispatch(addExpense({note:'Bought pasta for dinner tonight', description:'Pasta', amount:'2000', createdAt:2000}))
store.dispatch(addExpense({note:'Due May ', description:'Water bill', amount:'2000', createdAt:1000}))
console.log(store.getState())

const jsx = (
    <div>
        <Provider store={store}>
            <IndexRouter />
        </Provider>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
