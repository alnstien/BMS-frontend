import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'

import Login from './components/login/login';
import Registration from './components/register/userRegistration';
import Dashboard from './components/dashboard/index';
import Transaction from './components/transaction'
import Record from './components/record'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route 
          exact
          path="/myAdmin"
          component={Dashboard}
        />
        <Route 
          exact
          path="/records"
          component={Record}
        />
        <Route 
          exact
          path="/login"
          component={Login}
        />
        <Route 
          exact
          path="/transaction"
          component={Transaction}
        />
        <Route 
          exact
          path="/register"
          component={Registration}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
