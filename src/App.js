// import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./sass/main.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Navigation" exact component={Navigation} />
          <Route path="/" exact component={About} />
          <Redirect from="/about" to="/" />
          <Route path="/contact" exact component={Contact} />
          <Route path="/portfolio" exact component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
