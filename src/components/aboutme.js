import React from "react";

import { Grid, Cell } from "react-mdl";
import avatar2 from "../images/avatar2.PNG";

function About() {
  return (
    <div
      style={{
        margin: "auto",
        // position: "fixed",
        width: "100%",
        height: "100px",
        justifyContent: "center",
        paddingTop: "2rem",
        paddingLeft: "5rem",
        fontFamily: "Nunito",
      }}
    >
      <Grid>
        <Cell col={6}>
          <h2> About Me </h2>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          <br />
          commonly used to demonstrate the visual form of a document or a{" "}
          <p>
            typeface without relying on meaningful content. Lorem ipsum may be
          </p>
          used before final copy is available, but it may also be used to
          temporarily
          <br />
          replace copy in a process called greeking, which allows designers to
          consider <br />
          form without the meaning of the text influencing the design.
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
