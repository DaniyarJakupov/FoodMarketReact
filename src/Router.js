import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StorePicker from './containers/StorePicker';
import App from './containers/App';
import NotFound from './components/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
