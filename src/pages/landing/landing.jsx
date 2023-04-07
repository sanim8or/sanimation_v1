import React from "react";
import { Link } from "react-router-dom";

import "./landing.css";
import navbarList from "../../../assets/Data/navbarArray";

import { Hero } from "../../containers";
import { Brands, Cities } from "../../components";

export const CardWrapper = ({ type, left }) => {
  const selectedContent = navbarList[0].content[type];
  return (
    <div className={left ? "cardWrap ContainerL" : "cardWrap ContainerR"}>
      <div className={left ? "cardContainerHolderL" : "cardContainerHolderR"}>
        <div className="cardContainer">
          <div className="cardHeader">
            {selectedContent.con_title}
            <p className="cardDot">.</p>
          </div>
          <div className="redStroke cardStrip" />
          <div className="cardDescText">{selectedContent.con_desc}</div>
          <div className="actionWrapper">
            <Link className="Pinkbutton">Get Yours</Link>
            <Link className="knowMore">Know More ➡</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  // window.scroll({
  //   top: 1000,
  //   behavior: "smooth",
  // });
  return (
    <div className="landing-grid-wrapper">
      <div className="HeroArea">
        <Hero />
      </div>
      <Brands />
      <Cities />
      <div className="CardWrapMaster">
        <CardWrapper type={0} left />
        <CardWrapper type={1} />
        <CardWrapper type={2} left />
        <CardWrapper type={3} />
        <CardWrapper type={4} left />
        <CardWrapper type={5} />
        <CardWrapper type={6} left />
        <CardWrapper type={7} />
      </div>
    </div>
  );
};

export default Landing;
