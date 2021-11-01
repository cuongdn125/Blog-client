import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Sidebar />
        </div>
      </div>

      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
