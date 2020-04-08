import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6} className="contact-form">
          <h2> Send me an email </h2>
          <MainStyled>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Your Email" />
                </Col>
              </Form.Row>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                placeholder="Subject"
              >
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Subject" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Message"
                  style={{ minHeight: "180px" }}
                />
              </Form.Group>
            </Form>
            <Button
              variant="secondary"
              type="submit"
              style={{ width: "80px", height: "30px" }}
            >
              Send
            </Button>
          </MainStyled>
        </Cell>
        <Cell col={6}>
          <h2>Contact</h2>
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "20px", fontFamily: "Nunito" }}
                >
                  <a href="#" rel="noopener noreferrer">
                    <i
                      className="fa fa-envelope"
                      aria-hidden="true"
                      style={{
                        color: "grey",
                      }}
                    ></i>
                  </a>
                  <span className="contact-text"> ojokuredim@gmail.com </span>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "20px", fontFamily: "Nunito" }}
                >
                  <a
                    href="https://github.com/ojokure"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-github"
                      aria-hidden="true"
                      style={{
                        color: "grey",
                      }}
                    ></i>
                  </a>{" "}
                  <span className="contact-text">github.com/ojokure</span>
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "20px", fontFamily: "Nunito" }}
                >
                  <a
                    href="https://www.linkedin.com/in/oladimejiojo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-linkedin"
                      aria-hidden="true"
                      style={{
                        color: "grey",
                      }}
                    ></i>
                  </a>
                  <span className="contact-text">oladimejiojo</span>
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "20px", fontFamily: "Nunito" }}
                >
                  <a
                    href="https://twitter.com/ovobeckford2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-twitter"
                      aria-hidden="true"
                      style={{
                        color: "grey",
                      }}
                    ></i>
                  </a>{" "}
                  <span className="contact-text">ovobeckford2</span>
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

// const WrapDiv = styled.div`
//   border: 1px solid white;
//   background-image: url(${img});
//   background-size: cover;
//   background-position: center;
//   height: 95vh;
//   width: 100%;
// `;

const MainStyled = styled.main`
  width: 90vw;
  min-height: 40vh;
  max-width: 500px;
  border-radius: 4%;
  /* margin: 70px auto; */
  background: #34e89e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0f3443,
    #34e89e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f3443, #34e89e);
  padding: 25px;
  opacity: 0.95;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  &:hover {
    cursor: pointer;
  }
`;
