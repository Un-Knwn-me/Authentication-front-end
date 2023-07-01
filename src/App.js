import { Switch } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import Nopage from './components/Nopage';
import MailConfirm from './components/MailConfirm';


export const URL = "https://authentication-be.onrender.com"

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>

        <Route path="/signup">
          <Signup/>
        </Route>

        <Route path="/confirm-mail">
          <MailConfirm/>
        </Route>

        <Route path="/reset-password/:token">
          <ResetPassword/>
        </Route>

        <Route path="/dashboard">
          <Dashboard/>
        </Route>

        <Route path="**">
          <Nopage/>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
