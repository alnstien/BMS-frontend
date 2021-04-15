import React from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom'

import Login from './components/login/login';
import Registration from './components/register/userRegistration';
import Dashboard from './components/dashboard/index';

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
          path="/login"
          component={Login}
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
