import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/login/LoginPage';
import InvoicesPage from './components/invoice/InvoicesPage';
import InvoicePage from './components/invoice/InvoicePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={InvoicesPage} />
    <Route path="invoice" component={InvoicePage} />
    <Route path="login" component={LoginPage} />
  </Route>
);
