import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./common/Header";
import React from "react";
import Footer from "./common/Footer"

import Main from "./components/Main"
import AboutMe from "./components/AboutMe";
import SoftwareUsed from "./components/SoftwareUsed";
import Project from "./components/Project";
import Education from "./components/Project";
import ForwardPlans from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Route exact path="/" component={Main}></Route>
      <Route exact path="/AboutMe" component={AboutMe}></Route>
      <Route exact path="/SoftwareUsed" component={SoftwareUsed}></Route>
      <Route exact path="/Project" component={Project}></Route>
      <Route exact path="/Education" component={Education}></Route>
      <Route exact path="/ForwardPlans" component={ForwardPlans}></Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
