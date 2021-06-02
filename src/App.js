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
import Announcement from './components/announcement';
import User from './components/user'
import Profile from './components/profile'
import UserEvents from './components/user/events'
import Notifications from './components/user/inbox';
import UserProfile from './components/user/useProfile';
import HoldTransaction from './components/transaction/onhold';
import TransactionHistory from './components/transaction/history';
import Settings from './components/settings/settings';
import AccountSetting from './components/settings/accountSetting';
import UserSettings from './components/user/settings';
import MyTransaction from './components/user/transactions';
import MyHousehold from './components/user/household';
import MyPurok from './components/purok/index'
import Certificate from './components/user/certificate';
import ResidentRecords from './components/record/residents';
import Purok from './components/record/myPurok';
import ViewMyTransaction from './components/user/viewMyTransaction';
import ViewHousehold from './components/record/viewHousehold';
import ViewResident from './components/record/viewResident';
import ViewPurok from './components/record/viewPurok';
import PurokLeader from './components/purokLeader/index';
import LeadersPurok from './components/purokLeader/myPurok';
import PurokLeaderProfile from './components/purokLeader/myProfile';
import PurokAnnouncement from './components/purokLeader/announcements';
import PurokTransaction from './components/purokLeader/requests';
import AcceptedTransaction from './components/transaction/accepted';
import OR from './components/OR';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <Route 
          exact
          path="/announcement"
          component={Announcement}
        />
         <Route 
          exact
          path="/or"
          component={OR}
        />
        <Route 
          exact
          path="/purok-leader"
          component={PurokLeader}
        />
        <Route 
          exact
          path="/purok-leader/transaction"
          component={PurokTransaction}
        />
         <Route 
          exact
          path="/purok-leader/me"
          component={PurokLeaderProfile}
        />
        <Route 
          exact
          path="/purok-leader/my-purok"
          component={LeadersPurok}
        />
        <Route 
          exact
          path="/purok-leader/announcements"
          component={PurokAnnouncement}
        />
        <Route 
          exact
          path="/user/me"
          component={UserProfile}
        />
        <Route 
          exact
          path="/user/my-household"
          component={MyHousehold}
        />
        <Route 
          exact
          path="/user/certificates"
          component={Certificate}
        />
        <Route 
          exact
          path="/user/settings"
          component={UserSettings}
        />
        <Route 
          exact
          path="/user/transactions"
          component={MyTransaction}
        />
        <Route 
          exact
          path="/user/transactions/view=:id"
          component={ViewMyTransaction}
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
          path="/my-purok"
          component={MyPurok}
        />
        <Route 
          exact
          path="/settings"
          component={Settings}
        />
        <Route 
          exact
          path="/settings/account"
          component={AccountSetting}
        />
        <Route 
          exact
          path="/records"
          component={Record}
        />
        <Route 
          exact
          path="/records/purok/view"
          component={ViewPurok}
        />
        <Route 
          exact
          path="/records/residents/view"
          component={ViewResident}
        />
        <Route 
          exact
          path="/records/view"
          component={ViewHousehold}
        />
        <Route 
          exact
          path="/records/residents"
          component={ResidentRecords}
        />
        <Route 
          exact
          path="/records/purok"
          component={Purok}
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
          path="/requests/accepted"
          component={AcceptedTransaction}
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
