import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import Event from 'pages/Event';
import './App.css';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>

        <Route path="/events" exact>
          <Event />
        </Route>

        <Route path="/settings" exact>
          <Settings />
        </Route>

        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
