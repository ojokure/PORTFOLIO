import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";

const Main = ({ mode }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={(props) => <LandingPage {...props} mode={mode} />}
    />
    <Route
      path="/projects"
      render={(props) => <Projects {...props} mode={mode} />}
    />
    <Route
      path="/aboutme"
      render={(props) => <About {...props} mode={mode} />}
    />
    <Route
      path="/contact"
      render={(props) => <Contact {...props} mode={mode} />}
    />
  </Switch>
);

export default Main;
