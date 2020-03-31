import React from "react";
import "./App.css";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/Main";

// import wallp from "./images/wallpaper.jpg";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Ojokure">
          {/* <Header className="header-color" title="Ojokure" scroll> */}
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
