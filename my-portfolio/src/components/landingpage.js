import React, { useState } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../images/avatar.PNG";

function LandingPage({ mode }) {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className={mode ? "dark-mode-grid" : "landing-grid"}>
        <Cell col={12}>
          <img src={avatar} alt="avatar" className="avatar-img" />
          <div className="banner-text">
            <h1> Full Stack Web Developer </h1>
            <hr />
            <p>
              HTML/CSS | JS | React | Redux | React Native | Node JS | Express |
              MongoDB/SQL | Python
            </p>
            <div className="social-links">
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/oladimejiojo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              {/* github */}
              <a
                href="https://github.com/ojokure"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" aria-hidden="true"></i>
              </a>
              {/* twitter */}
              <a
                href="https://twitter.com/ovobeckford2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
              {/* email */}
              <a href="/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-envelope-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default LandingPage;
