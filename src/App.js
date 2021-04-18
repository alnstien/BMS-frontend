import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import './css/responsiveRow.css';
import Login from './components/login/login';
import Registration from './components/register/userRegistration';
import Dashboard from './components/dashboard/index';
import Transaction from './components/transaction'
import Record from './components/record'
import Events from './components/events'
import Billing from './components/bills'
import User from './components/user'
import Profile from './components/profile'

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
          path="/me"
          component={Profile}
        />
        <Route 
          exact
          path="/"
          component={User}
        />
        <Route 
          exact
          path="/events"
          component={Events}
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
        <Route 
          exact
          path="/billing"
          component={Billing}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
