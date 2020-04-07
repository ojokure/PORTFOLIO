import React from "react";

import { Grid, Cell } from "react-mdl";
import avatar2 from "../images/avatar2.PNG";

function About() {
  return (
    <div className="about-grid">
      <Grid>
        <Cell col={6} style={{ maxWidth: "650px" }}>
          <article>
            <h1 style={{ marginTop: "38px" }}> About Me </h1>
            I've always sought out opportunities and challenges that help me
            understand the inner-workings of things and <br />
            solve problems.
            <p style={{ marginTop: "6px", fontSize: "18px" }}>
              Although my professional path has taken a few twist and turns
              because of that - from a trained field Geologist to a Banker in a
              reputable financial institution for a little over two years - I
              never lost my passion to help others and make lifes better in my
              own possible way no matter how little and that's why I'm excited
              to make a big impact in the tech world.
            </p>
            <p style={{ marginTop: "6px", fontSize: "18px" }}>
              When I'm not coding or reading, you'll find me sprinting or
              working out in the gym.
            </p>
          </article>
        </Cell>
        <Cell col={6}>
          <img
            src={avatar2}
            alt="avatar2"
            style={{ borderRadius: "10%", marginTop: "40px" }}
          />
        </Cell>
      </Grid>
    </div>
  );
}

export default About;
