import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ourWorks.css";
import BackCTA from "../../components/backCTA/BackCTA";
import { OurWorkPage } from "../../../assets/Data/navbarArray";
import Showcaser from "../../components/showcaser/showcaser";

const OurWorks = () => {
  const [activeCat, setActiveCat] = useState("all");
  const [activeCatText, setActiveCatText] = useState("All");

  const toggleCat = (item) => {
    if (activeCat == item.key) {
      setActiveCat("all");
      setActiveCatText("All");
    } else {
      setActiveCat(item.key);
      setActiveCatText(item.title);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="contentWorks">
          <div className="navbarRegion" />
          <div className="workPageHeader">
            <div className="backCtaa">
              <BackCTA title={OurWorkPage.title} url="/" />
            </div>
          </div>
          <div className="catANDprojContainer">
            <div className="categoryContainer">
              {OurWorkPage.categories.map((item) => (
                <Link
                  className={
                    activeCat == item.key
                      ? "categoryBtn activeText"
                      : "categoryBtn"
                  }
                  key={item.key}
                  onClick={() => toggleCat(item)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="projContainer">
              <Showcaser
                titleText={activeCatText == "All" ? "" : activeCatText}
                condition={activeCat == "all" ? "" : activeCat}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
