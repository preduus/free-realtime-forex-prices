import React from 'react';
import LoginPage from './components/Login';

import { BrowserRouter, Switch } from 'react-router-dom';
import PublicRoute from './routes/Public';
import PrivateRoute from './routes/Private';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={() => {
          return <h1>Authenticated</h1>
        }} />
        <PublicRoute exact path="/login" component={LoginPage} restricted={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
