import React from "react";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsGrid from "./components/FriendsGrid";
function App() {
  return (
    <div className='App'>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/Friends'>Friends page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path='/Friends' component={FriendsGrid} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}
export default App;