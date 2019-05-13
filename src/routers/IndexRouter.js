import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import ExpenseCreatePage from '../components/ExpenseCreatePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';


const IndexRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true} /> 
            <Route path='/create' component={ExpenseCreatePage} />
            <Route path='/edit' component={ExpenseEditPage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default IndexRouter;