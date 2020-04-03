import React, { useState } from "react";
import "./App.css";
import { Layout, Navigation, Header, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import Toggle from "./components/toggle";
import { lightTheme, darkTheme } from "./components/theme";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div>
      <Layout>
        {/* <Header className="header-color" title="Oladimeji Ojo"  scroll> */}
        <Header
          className={mode === "dark" ? "dark-mode" : "header-color"}
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontFamily: "Nunito"
              }}
              to="/"
            >
              O.O
            </Link>
          }
        >
          <Navigation>
            <Link to="/projects">Projects</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Contact</Link>

            <Toggle
              toggleMode={toggleMode}
              theme={mode === "light" ? lightTheme : darkTheme}
            />
          </Navigation>
        </Header>
        <Drawer
          title={
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontFamily: "Nunito",
                fontWeight: "bold"
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
                fontFamily: "Nunito"
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
                fontFamily: "Nunito"
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
                fontFamily: "Nunito"
              }}
            >
              Contact
            </Link>
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
