import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import './css/responsiveRow.css';
import './css/custom.css';
import './css/dropdown.css';
import 'simplebar/dist/simplebar.min.css';
import Login from './components/login/login';
import Registration from './components/register/userRegistration';
import Dashboard from './components/dashboard/index';
import Transaction from './components/transaction'
import Record from './components/record'
import Events from './components/events'
import Billing from './components/bills'
import User from './components/user'
import Profile from './components/profile'
import UserEvents from './components/user/events'
import Notifications from './components/user/inbox';
import UserProfile from './components/user/useProfile';
import HoldTransaction from './components/transaction/onhold';
import TransactionHistory from './components/transaction/history';
import Settings from './components/settings/settings';
import Setting from './components/settings/settings';
import Release from './components/transaction/release'
import MyTransaction from './components/user/transactions';

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
          path="/user/me"
          component={UserProfile}
        />
        <Route 
          exact
          path="/user/transactions"
          component={MyTransaction}
        />
        <Route 
          exact
          path="/user/events"
          component={UserEvents}
        />
        <Route 
          exact
          path="/user/notifications"
          component={Notifications}
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
          path="/settings"
          component={Setting}
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
          path="/requests"
          component={Transaction}
        />
        <Route 
          exact
          path="/requests/hold"
          component={HoldTransaction}
        />
         <Route 
          exact
          path="/requests/release"
          component={Release}
        />
        <Route 
          exact
          path="/requests/history"
          component={TransactionHistory}
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
