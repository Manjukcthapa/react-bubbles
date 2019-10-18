import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute"

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <Link to="/login">
            <a>Login</a>
          </Link>
          <Link to="/BubblePage">
            <a>Bubble</a>
          </Link>
        <Route exact path="/login" component={Login} />
        <PrivateRoute
          path="/BubblePage"
          component={props => <BubblePage />}
        />

      </div>
    </Router>
  );
}

export default App;
