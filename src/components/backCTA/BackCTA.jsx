import React from "react";
import { Link } from "react-router-dom";
import "./BackCTA.css";

import backArrowSVG from "../../../assets/svgs/back.svg";

const BackCTA = ({ title, url }) => {
  return (
    <div>
      <Link to={url}>
        <img src={backArrowSVG} className="backIMG" />
      </Link>
      <p className="titleText">{title}</p>
      <p className="dotText">.</p>
    </div>
  );
};

export default BackCTA;
