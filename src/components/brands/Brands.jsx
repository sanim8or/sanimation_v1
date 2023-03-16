import React from "react";
import {
  First,
  Second,
  Third,
  Fourth,
} from "../../../assets/images/clients/indexOfClients";
import "./Brands.css";

const Brands = () => {
  return (
    <div className="masterWrapper">
      {First ? <img className="clientLogo" src={First} /> : null}
      {Second ? <img className="clientLogo" src={Second} /> : null}
      {Third ? <img className="clientLogo" src={Third} /> : null}
      {Fourth ? <img className="clientLogo" src={Fourth} /> : null}
    </div>
  );
};

export default Brands;
