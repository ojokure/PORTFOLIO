import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Oladimeji Ojo </h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: "230px" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          {/* <hr /> */}
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (+234) 803 693 8179
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  ojokuredim@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                  ovobeckford2
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Contact;
