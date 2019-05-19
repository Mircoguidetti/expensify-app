import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import IndexRouter from './routers/IndexRouter';
import './styles/main.scss';

const store = configureStore()
console.log(store.getState())

ReactDOM.render(<IndexRouter />, document.getElementById('app'));
