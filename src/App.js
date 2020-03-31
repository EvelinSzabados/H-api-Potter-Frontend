import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import HouseList from "./components/HouseList";
import House from "./components/House";
// import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/houses/:id" component={House}></Route>
        <Route exact path="/houses" component={HouseList}></Route>
      </Router>
    </React.Fragment>
  );
};

export default App;
