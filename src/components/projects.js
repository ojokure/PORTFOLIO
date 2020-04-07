import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardActions,
  CardTitle,
  Button,
  CardMenu,
  CardText,
  IconButton,
} from "react-mdl";
import devcoach1 from "../images/devcoach4.PNG";
import devcoach2 from "../images/devcoach1.PNG";
import tryble1 from "../images/tryble1.PNG";
import tryble2 from "../images/tryble2.PNG";
import mud from "../images/mud.PNG";
import node from "../images/node.PNG";

function Projects({ mode }) {
  const [tabs, setTabs] = useState(0);

  const toggle = () => {
    if (tabs === 0) {
      return (
        <div className="projects-grid">
          <Card
            className="projects-cards"
            shadow={5}
            style={{ borderRadius: "9px" }}
          >
            <CardTitle
              style={{
                color: "grey",
                height: "230px",
                background: `url(${devcoach1}) center / cover`,
              }}
            ></CardTitle>
            <CardText>
              DevCoach provides a platform for junior developers to train and
              improve their skills efficiently through focused support and
              feedback.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/LABS-EU3/quality_hub_frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github"
                  aria-hidden="true"
                  style={{
                    fontSize: "25px",
                    paddingRight: "15px",
                    color: "#185c57",
                  }}
                ></i>
              </a>
              <a
                href="https://dev-coach.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-globe"
                  aria-hidden="true"
                  style={{
                    fontSize: "25px",
                    paddingRight: "15px",
                    color: "#185c57",
                  }}
                ></i>
              </a>
              {/* <Button colored> Codepen </Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
          <Card
            className="projects-cards"
            shadow={5}
            style={{ borderRadius: "9px" }}
          >
            <CardTitle
              style={{
                color: "#2dc68c",
                height: "230px",
                background: `url(${devcoach2}) center / cover`,
              }}
            ></CardTitle>
            <CardText>
              Devs can sign up, book coaches, communicate with them over instant
              messaging & video chat, and work collaboratively(live share) on
              coding challenges.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/LABS-EU3/quality_hub_frontend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github"
                  aria-hidden="true"
                  style={{
                    fontSize: "25px",
                    paddingRight: "15px",
                    color: "#185c57",
                    alignItems: "center",
                  }}
                ></i>
              </a>
              <a
                href="https://www.dev-coach.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-globe"
                  aria-hidden="true"
                  style={{
                    fontSize: "25px",
                    paddingRight: "15px",
                    color: "#185c57",
                  }}
                ></i>
              </a>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
          <Card
            className="projects-cards"
            shadow={5}
            style={{ borderRadius: "9px" }}
          >
            <CardTitle
              style={{
                color: "#2dc68c",
                height: "230px",
                background: `url(${tryble2}) center / cover`,
              }}
            ></CardTitle>
            <CardText>
              Tryble is a platform that allows you to collaborate effectively on
              projects with the tools and support you need through a like minded
              community.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/Tryble"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github"
                  aria-hidden="true"
                  style={{
                    fontSize: "25px",
                    paddingRight: "15px",
                    color: "#185c57",
                  }}
                ></i>
              </a>
              <a
                href="https://tryble.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-globe"
                  aria-hidden="true"
                  style={{
                    fontSize: "25px",
                    paddingRight: "15px",
                    color: "#185c57",
                  }}
                ></i>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
        </div>
      );
    } else if (tabs === 2) {
      return (
        <div className="projects-grid">
          <Card
            className="projects-cards"
            shadow={5}
            style={{ borderRadius: "9px" }}
          >
            <CardTitle
              style={{
                color: "grey",
                height: "230px",
                background: `url(${mud}) center / cover`,
              }}
            ></CardTitle>
            <CardText>
              A deployed MUD (Multi-User Dungeon) server of 100 connected rooms
              built with Django(python).
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/CSEU3-mud-bos/mud-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github"
                  aria-hidden="true"
                  style={{
                    fontSize: "25px",
                    paddingRight: "15px",
                    color: "#185c57",
                  }}
                ></i>
              </a>

              {/* <Button colored> Codepen </Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
        </div>
      );
    } else if (tabs === 1) {
      return (
        <div className="projects-grid">
          <Card
            className="projects-cards"
            shadow={5}
            style={{ borderRadius: "9px" }}
          >
            <CardTitle
              style={{
                color: "grey",
                height: "230px",
                background: `url(${node}) center / cover`,
              }}
            ></CardTitle>
            <CardText style={{ color: "black" }}>
              Backend for a "Better Professor" app that helps professors plan
              project supervision and mentoring their students.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/Better-Professor-App-EU/backend-dmeji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github"
                  aria-hidden="true"
                  style={{
                    fontSize: "25px",
                    paddingRight: "15px",
                    color: "#185c57",
                  }}
                ></i>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          <Card
            className="projects-cards"
            shadow={5}
            style={{ borderRadius: "9px" }}
          >
            <CardTitle
              style={{
                color: "grey",
                height: "230px",
                background: `url(${node}) center / cover`,
              }}
            ></CardTitle>
            <CardText style={{ color: "black" }}>
              Architected backend (server, app, database) for dev-coach.com
              built with Node JS(Express).
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/LABS-EU3/quality_hub_backend"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-github"
                  aria-hidden="true"
                  style={{
                    fontSize: "25px",
                    paddingRight: "15px",
                    color: "#185c57",
                  }}
                ></i>
              </a>

              {/* <Button colored> Codepen </Button> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
        </div>
      );
    }
  };

  return (
    <div className="category-tabs">
      <Tabs
        activeTab={tabs.activeTab}
        onChange={(tabId) => setTabs((prevState) => tabId)}
        ripple
      >
        <Tab>React</Tab>
        <Tab>Node JS</Tab>
        <Tab>Python</Tab>
      </Tabs>
      <Grid>
        <Cell col={12}>
          <div className="content">{toggle()}</div>
        </Cell>
      </Grid>
    </div>
  );
}

export default Projects;
