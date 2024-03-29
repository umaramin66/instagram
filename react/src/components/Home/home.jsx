import React from "react";
import Story from "./story";
import Posts from "./posts";
import Suggestion from "./suggestion";

const Home = () => {
  return (
    <section className="main-container">
      <div className="inner-container">
        <div className="left-section">
          <Story />

          <Posts />
          <Posts />
        </div>
        <div className="right-section">
          <Suggestion />
        </div>
      </div>
    </section>
  );
};

export default Home;
