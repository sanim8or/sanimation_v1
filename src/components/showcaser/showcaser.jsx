import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projArray } from "../../../assets/Data/worksData";
import "./showcaser.css";

import { dummy, dummyDark } from "../../../assets/images/projects/index";

const ProjectItem = ({ proj }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="projectContainer-itemMaster"
      to={`./${proj.id + 290}`}
    >
      {isHover ? <div className="light-effect light-effect-anim1s" /> : null}
      <div className="contentHolder">
        <p>{proj.prName}</p>
        <div>{proj.client}</div>
        <div className="textboxAnimated" />
      </div>
      <img src={proj.img ? proj.img : dummy} className="imgHolder" />
    </Link>
  );
};

const Showcaser = ({ condition }) => {
  const [projList, setProjList] = useState(projArray);
  // if (condition !== "All") {
  //   setProjList(projArray.filter((i) => i.service.includes(condition)));
  // }
  useEffect(() => {
    condition !== ""
      ? setProjList(projArray.filter((i) => i.service.includes(condition)))
      : setProjList(projArray);
  }, [condition]);

  return (
    <div>
      <div className="condition_Text">{condition}</div>
      {projList.length > 0 ? (
        <div className="projectContainer-master">
          {projList.map((project, index) => {
            return <ProjectItem proj={project} key={project.id} />;
          })}
        </div>
      ) : (
        <p>As of now, No projects in this category</p>
      )}
    </div>
  );
};

export default Showcaser;
