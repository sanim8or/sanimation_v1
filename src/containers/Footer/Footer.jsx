import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

import navbarList, { contactUsDetails } from "../../../assets/Data/navbarArray";
import threeArrows from "../../../assets/svgs/Arrow-svg.svg";

const FooterContentHolder = ({ title, url, contentArr }) => {
  return (
    <div className="bottom-link-head-wrapper">
      <Link to={url} className="bottom-link-head">
        {title}
      </Link>
      {contentArr !== null
        ? contentArr.map((subitem, index) => (
            <span key={index}>
              <br />
              <span>
                <Link to={subitem.con_url} className="bottom-link-body">
                  {subitem.con_title}
                </Link>{" "}
              </span>
            </span>
          ))
        : null}
    </div>
  );
};

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div className="foot_master">
      <div className="footer">
        <div className="ArrowimageReserve">
          <img
            className="imgFooter"
            src={require("../../../assets/images/S5-cold.png")}
          />
          {/* <img src={threeArrows} /> */}
        </div>
        <div className="footer-tagHolder">
          Don't let your <span className="pinkyWord">competitors</span>
          <br />
          <span className="boldBottomText">
            steal the <span className="pinkyWord">spotlight</span>.
          </span>
        </div>
        <span className="categoryWrapper">
          {navbarList.map((item, index) => (
            <span key={index}>
              <FooterContentHolder
                title={item.title}
                url={item.url}
                contentArr={item.content ? item.content : null}
              />
            </span>
          ))}
        </span>
        <div className="contactUs-container">
          <Link to="/connect" className="bottom-link-head">
            Connect
          </Link>
          <div className="contactUs-det-wrapper">
            <div className="contactUs-details">
              <Link to={contactUsDetails.phoneNumberCODE}>
                {contactUsDetails.phoneNumber}
              </Link>
            </div>
            <div className="contactUs-details">
              <Link to={contactUsDetails.mailCODE}>
                {contactUsDetails.emailAddress}
              </Link>
            </div>
          </div>
        </div>

        <div className="copyright-text">
          &copy; Sanimation Studios &trade; {date}. Division of Three Fold
          Visuals Pvt. Ltd.
        </div>
      </div>
    </div>
  );
};

export default Footer;
