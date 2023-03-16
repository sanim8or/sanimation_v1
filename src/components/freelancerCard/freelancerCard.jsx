import React from "react";
import { Link } from "react-router-dom";

import "./freelancerCard.css";

const FreelancerCard = ({ fieldData, id }) => {
  return (
    <Link className="freelanceCardContainer">
      <div className="nameTitle">{fieldData.Name}</div>
      {fieldData.Number}
      <span>{fieldData.PrimeSkill}</span>
      <div className="">{fieldData.EHR}/HR</div>
      {id}
    </Link>
  );
};

export default FreelancerCard;
