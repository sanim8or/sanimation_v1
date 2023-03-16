import React from "react";
import "./story.css";

import BackCTA from "../../components/backCTA/BackCTA";
import { storyPageContent } from "../../../assets/Data/navbarArray";

const Story = () => {
  return (
    <>
      <div className="wrapper">
        <div className="contentWorks ">
          <div className="navbarRegion" />
          <div className="workPageHeader">
            <div className="backCtaa">
              <BackCTA title={storyPageContent.title} url="/" />
            </div>
          </div>
          <div className="storyContentContainer rectangleFilled">
            <p> {storyPageContent.content.mission}</p>
            <p> {storyPageContent.content.story}</p>
            <p> {storyPageContent.content.goal}</p>
            <p> {storyPageContent.content.closure}</p>
            <p className="closureCTAtext"> {storyPageContent.content.cta}</p>
            <div>
              <p className="rightalign"> - Sanchit Bhat, Founder </p>
              <p className="rightalign pink"> {`(Sanimator)`} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
