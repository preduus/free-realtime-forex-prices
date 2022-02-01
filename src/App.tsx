import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import PublicRoute from './routes/Public';
import PrivateRoute from './routes/Private';

import LoginPage from './components/Login';
import AppPage from './components/App';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/">
          <Redirect to="/app" />
        </PublicRoute>
        <PrivateRoute path="/app" component={AppPage} />
        <PublicRoute path="/login" component={LoginPage} restricted={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
