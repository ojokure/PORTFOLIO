import React, { useState, useEffect } from "react";
import "./App.css";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import Toggle from "./components/toggle";
import { lightTheme, darkTheme } from "./components/theme";

function App() {
  const [mode, setMode] = useState(getMode());

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //   } else {
  //     setMode("light");
  //   }
  // };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(mode));
  }, [mode]);

  function getMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const usePreferredColorScheme = getPrefColorScheme();

    // If mode was save -> dark/light
    if (isReturningUser) {
      return savedMode;
    }
    // if preffered color scheme is dark -> dark
    else if (usePreferredColorScheme) {
      return true;
    }
    // otherwise -> light
    else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefer-color-scheme : dark)").matches;
  }

  return (
    <div>
      <Layout>
        {/* <Header className="header-color" title="Oladimeji Ojo"  scroll> */}
        <Header
          className={mode ? "dark-mode-header" : "header-color"}
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Nunito",
              }}
              to="/"
            >
              O.O
            </Link>
          }
        >
          <Navigation>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutme">About</Link>
            <Link to="/contact">Contact</Link>
            <Toggle />
            {/* <div className="toggle-container">
              <span style={{ color: mode ? "grey" : "yellow" }}>☀︎</span>
              <span className="toggle">
                <input
                  checked={mode}
                  onChange={() => setMode((prevMode) => !prevMode)}
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                />
                <label htmlFor="checkbox" />
              </span>
              <span style={{ color: mode ? "slateblue" : "grey" }}>☾</span>
            </div> */}
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "Nunito",
                fontWeight: "bold",
              }}
              to="/"
            >
              O.O
            </Link>
          }
        >
          <Navigation>
            <Link
              to="/projects"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontFamily: "Nunito",
              }}
            >
              Projects
            </Link>
            <Link
              to="/aboutme"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontFamily: "Nunito",
              }}
            >
              About Me
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontFamily: "Nunito",
              }}
            >
              Contact
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main mode={mode} />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
