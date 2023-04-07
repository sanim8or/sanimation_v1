import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./showcaser.css";
import Airtable from "airtable";

import { dummy } from "../../../assets/images/projects/projectImages";

const ProjectItem = ({ proj }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="projectContainer-itemMaster"
      to={`./${proj.id}`}
    >
      {isHover ? <div className="light-effect light-effect-anim1s" /> : null}
      <div className="contentHolder">
        <p>{proj.fields.Project}</p>
        <div>{proj.fields.Client}</div>
        <div className="textboxAnimated" />
      </div>
      <img
        src={proj.fields.Img ? proj.fields.Img[0].url : dummy}
        className="imgHolder"
      />
    </Link>
  );
};

const Showcaser = ({ condition, titleText }) => {
  const baseProjects = new Airtable({ apiKey: "keygH6WWimyW7XOyS" }).base(
    "app7lGIGmaif4WyyS"
  );
  const [mainprojList, setMainProjList] = useState([]);
  const [projList, setProjList] = useState(mainprojList);
  const [isLoading, setIsLoading] = useState(true);

  // AIRTABLE CONTSTRUCTOR
  useEffect(() => {
    baseProjects("Table 1")
      .select({
        view: "Grid view",
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          setIsLoading(false);
          return;
        }
        setMainProjList(records);
        setIsLoading(false);
      });
  }, []);
  // TILL HERE AIRTABLE SETUP
  // Whenever Condition Changes this UseEffect will respond
  useEffect(() => {
    condition !== ""
      ? setProjList(
          mainprojList.filter((i) => i.fields.Service.includes(condition))
        )
      : setProjList(mainprojList);
  }, [condition, mainprojList]);

  return (
    <div>
      <div className="condition_Text">{titleText}</div>
      {isLoading ? (
        <p>Loading...</p>
      ) : projList.length > 0 ? (
        <div className="projectContainer-master">
          {projList.map((project, index) => {
            return <ProjectItem proj={project} key={index} />;
          })}
        </div>
      ) : (
        <p>As of now, No projects in this category</p>
      )}
    </div>
  );
};

export default Showcaser;
