import React, { useState } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

function Projects(props) {
  // const initial = {
  //   activeTab: 0
  // };
  const [tabs, setTabs] = useState(0);
  console.log(tabs);

  const toggle = () => {
    if (tabs === 0) {
      return (
        <div>
          <h1>This is Zero</h1>
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
      <section className="project-grids"> {toggle()} </section>
    </div>
  );
}

export default Projects;
