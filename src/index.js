import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import IndexRouter from './routers/IndexRouter';
import { addExpense } from './actions/expenses';
import './styles/main.scss';

const store = configureStore()

store.dispatch(addExpense({note:'Coffe', description:'Bought coffe for the week', amount:1000}))
store.dispatch(addExpense({note:'Pasta', description:'Bought pasta for dinner tonight', amount:2000}))
console.log(store.getState())

const jsx = (
    <div>
        <Provider store={store}>
            <IndexRouter />
        </Provider>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
