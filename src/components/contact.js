import React, { useState } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import axios from "axios";
import Notification from "../utils/notification";

function Contact() {
  const initialForm = {
    name: "",
    senderemail: "",
    subject: "",
    message: "",
  };

  const initialNotify = {
    success: false,
    error: false,
    info: false,
  };

  const [contactForm, setContactForm] = useState(initialForm);
  const [notify, setNotify] = useState(initialNotify);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const closeMessage = () => {
    setNotify((prevNotify) => ({
      ...prevNotify,
      success: false,
      error: false,
      info: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://porf-server.herokuapp.com/email", contactForm)

      .then((res) => {
        setContactForm(initialForm);
        setNotify((prevNotify) => ({ ...prevNotify, success: true }));
      })
      .catch((error) => {
        setNotify((prevNotify) => ({
          ...prevNotify,
          error: error.response.data.message,
        }));
      });
  };
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6} className="contact-form">
          <h2> Send me an email </h2>
          <MainStyled>
            <Form onChange={handleChange}>
              <Form.Row>
                <Col>
                  <Form.Control
                    placeholder="Name"
                    name="name"
                    value={contactForm.name}
                  />
                </Col>
                <Col>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      name="senderemail"
                      placeholder="Your Email"
                      value={contactForm.senderemail}
                      required="True"
                      type="email"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Group
                controlId="exampleForm.ControlInput1"
                placeholder="Subject"
              >
                <Form.Label></Form.Label>
                <Form.Control
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={contactForm.subject}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="message"
                  placeholder="Please type your message here. . . ."
                  style={{ minHeight: "180px" }}
                  value={contactForm.message}
                />
              </Form.Group>
            </Form>
            <Button
              variant="secondary"
              type="submit"
              style={{ width: "80px", height: "30px" }}
              onClick={handleSubmit}
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
      <Notification
        onClose={closeMessage}
        variant="success"
        message="Sent! Thank you for writing me ❤"
        open={notify.success}
      />

      <Notification
        onClose={closeMessage}
        variant="error"
        message={notify.error}
        open={notify.error}
      />
    </div>
  );
}

export default Contact;

const MainStyled = styled.main`
  width: 90vw;
  min-height: 40vh;
  max-width: 500px;
  border-radius: 4%;
  /* margin: 70px auto; */
  background: #34e89e;
  background: -webkit-linear-gradient(to right, #0f3443, #34e89e);
  background: linear-gradient(to right, #0f3443, #34e89e);
  padding: 25px;
  opacity: 0.95;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  &:hover {
    cursor: pointer;
  }
`;
