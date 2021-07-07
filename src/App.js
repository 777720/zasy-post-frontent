import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import { HomeIndex } from "./feature/Home/HomeIndex"
import { Things } from "./feature/Things/Things";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add">
            <Things />
          </Route>
          <Route path="/">
            <HomeIndex />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
