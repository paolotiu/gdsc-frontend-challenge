import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';

import './App.css';
import Dashboard from 'pages/Dashboard';

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

        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
