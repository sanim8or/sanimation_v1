import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

import { heroCopy } from "../../../assets/Data/navbarArray";

const Hero = () => {
  return (
    <div className="masterContainer">
      <div className="master-child1">
        <span className="bold">
          {heroCopy.bigWord}
          <br />
        </span>
        <span className="midlineHero">
          {heroCopy.smallCopy} <br />
        </span>
        <span className="midlineHero">
          {heroCopy.smallCopy2}
          <span className="pinkBoldDot"> .</span>
        </span>
        <div className="redStroke" />
        <span className="underlyingText">{heroCopy.underlyingCopy}</span>
      </div>
      <Link to="/connect" className="ctaContainer master-child2">
        <div className="light-effect light-effect-anim2sInfinite" />
        {/* <p className="ctaCopy">{heroCopy.ctaCopy}</p> */}
        <span className="ctaCopy"> {heroCopy.ctaCopy} </span>
      </Link>

      <div className="gradientBlendWhite" />
    </div>
  );
};

export default Hero;
