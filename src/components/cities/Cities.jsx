import React from "react";
import "./Cities.css";

import { citiesList } from "../../../assets/Data/navbarArray";

const Cities = ({ white }) => {
  return (
    <>
      {white == true ? (
        <div className="citiesContainer whiteCity">
          <p className="marquee  citiesText whiteCity">
            <span>{citiesList}&nbsp;</span>
          </p>
        </div>
      ) : (
        <div className="citiesContainer">
          <p className="marquee  citiesText">
            <span>{citiesList}&nbsp;</span>
          </p>
        </div>
      )}
      {/* <p className="marquee marquee2 citiesText">
        <span>{citiesList}&nbsp;</span>
      </p> */}
    </>
  );
};

export default Cities;
