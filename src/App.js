import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contribute from "./components/pages/Contribute";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import Whitepaper from "components/pages/Whitepaper";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contribute" exact component={Contribute} />
          <Route path="/about" exact component={About} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/whitepaper" exact component={Whitepaper} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
