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
  IconButton
} from "react-mdl";
import devcoach1 from "../images/devcoach1.PNG";
import devcoach2 from "../images/devcoach2.PNG";
import tryble1 from "../images/tryble1.PNG";
import tryble2 from "../images/tryble2.PNG";

function Projects() {
  // const initial = {
  //   activeTab: 0
  // };
  const [tabs, setTabs] = useState(0);

  const toggle = () => {
    if (tabs === 0) {
      return (
        <div className="projects-grid">
          <Card
            className="projects-cards"
            shadow={5}
            // style={{
            //   minWidth: "450px",
            //   margin: "10px auto",
            //   borderRadius: "5%"
            // }}
          >
            <CardTitle
              style={{
                color: "grey",
                height: "200px",
                background: `url(${devcoach1}) center / cover`
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum looojhhhhhhhhhh hhhhh hhhhhh hhhhhh hhhhhh hhhhhh
              hhhhhh hhhhh huijngyhvyujb hujgyujhb
            </CardText>
            <CardActions border>
              <Button colored> Github </Button>
              <Button colored> Codepen </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card className="projects-cards" shadow={5}>
            <CardTitle
              style={{
                color: "#2dc68c",
                height: "200px",
                background: `url(${devcoach2}) center / cover`
              }}
            >
              Tryble
            </CardTitle>
            <CardText>
              Lorem Ipsum looojhhhhhhhhhh hhhhh hhhhhh hhhhhh hhhhhh hhhhhh
              hhhhhh hhhhh huijngyhvyujb hujgyujhb
            </CardText>
            <CardActions border>
              <Button colored> Github </Button>
              <Button colored> Codepen </Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card className="projects-cards" shadow={5}>
            <CardTitle
              style={{
                color: "#2dc68c",
                height: "200px",
                background: `url(${tryble1}) center / cover`
              }}
            >
              Tryble
            </CardTitle>
            <CardText>
              Lorem Ipsum looojhhhhhhhhhh hhhhh hhhhhh hhhhhh hhhhhh hhhhhh
              hhhhhh hhhhh huijngyhvyujb hujgyujhb
            </CardText>
            <CardActions border>
              <Button colored> Github </Button>
              <Button colored> Codepen </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
          <Card className="projects-cards" shadow={5}>
            <CardTitle
              style={{
                color: "#2dc68c",
                height: "200px",
                background: `url(${tryble2}) center / cover`
              }}
            >
              Tryble
            </CardTitle>
            <CardText>
              Lorem Ipsum looojhhhhhhhhhh hhhhh hhhhhh hhhhhh hhhhhh hhhhhh
              hhhhhh hhhhh huijngyhvyujb hujgyujhb
            </CardText>
            <CardActions border>
              <Button colored> Github </Button>
              <Button colored> Codepen </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
        </div>
      );
    } else if (tabs === 1) {
      return (
        <div>
          <h1>This is One</h1>
        </div>
      );
    } else if (tabs === 2) {
      return (
        <div>
          <h1>This is Two</h1>
        </div>
      );
    } else if (tabs === 3) {
      return (
        <div>
          <h1>This is Three</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>This is Four</h1>
        </div>
      );
    }
  };

  return (
    <div className="category-tabs">
      <Tabs
        activeTab={tabs.activeTab}
        onChange={tabId => setTabs(prevState => tabId)}
        ripple
      >
        <Tab>React</Tab>
        <Tab>Angular</Tab>
        <Tab>Mongo</Tab>
        <Tab>SQL</Tab>
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
