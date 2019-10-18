import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav> 
          <div>
      <Link to="/login">
            <a>Login</a>
          </Link>
          </div> 
          <div>
          <Link to="/BubblePage">
            <a>Bubble</a>
          </Link>
          </div>
       </nav>
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
