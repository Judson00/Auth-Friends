import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsGrid from "./components/FriendsGrid";
import "./App.css";

function App() {
  return (
    <div className='App'>

      <div>
        <Link to='/login'>Login</Link>
      </div>
      <div>
        <Link to='/Friends'>Friends page</Link>
      </div>

      <Switch>
        <PrivateRoute path='/Friends' component={FriendsGrid} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;