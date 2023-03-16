import React, { useState, useEffect } from "react";
import "./Navbar.css";

// import { ReactComponent as Folder } from "./folder.svg";
import backArrowSVG from "../../../assets/svgs/back.svg";
import backArrowSVGWhite from "../../../assets/svgs/back-white.svg";
import logo from "../../../assets/svgs/Logo-Unit.svg";
import logoWhite from "../../../assets/svgs/Logo-Unit-white.svg";
import navbarList from "../../../assets/Data/navbarArray";
import { Link, useLocation, matchPath } from "react-router-dom";

const NavbarButton = ({ item }) => {
  const hasContent = item.content;
  return (
    <>
      <Link to={item.url} className="san__navbar-links_container">
        <p>{item.title}</p>
        {hasContent ? (
          <div className="dropContainer--animated">
            {item.content.map((subItem, index) => {
              return (
                <Link to={subItem.con_url} key={index}>
                  <div className="dropItem">
                    {subItem.con_title} <br />
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}
      </Link>
    </>
  );
};

const Navbar = () => {
  const [solidPink, setSolidPink] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const match = matchPath(
      {
        path: "/spotlight/:id",
        exact: true,
        strict: false,
      },
      location.pathname
    );
    if (
      location.pathname === "/" ||
      location.pathname === "/connect" ||
      match
    ) {
      setSolidPink(false);
    } else {
      setSolidPink(true);
    }
  }, [location]);

  return (
    <div className={`san__navbar ${!solidPink ? "gradNavBG" : "solidNavBG"}`}>
      <div className="san__navbar-links">
        <Link to="/" className="san__navbar-links_logo">
          <img src={!solidPink ? logo : logoWhite} alt="logo" />
        </Link>
      </div>
      <div className="san__navbar-links2">
        {navbarList
          .filter((item) => !item.hidden) // <-- this creates a new array with only the items that have hidden: false
          .map((item, index) => (
            <NavbarButton
              key={index}
              item={item}
              className="san__navbar-links_container"
            />
          ))}

        <Link className="san__navbar-links_container nofill" to="/connect">
          <img
            style={{ fill: "white" }}
            src={!solidPink ? backArrowSVG : backArrowSVGWhite}
            className="connectArrowNavbar"
          />
          {/* <p>{"Connect"}</p> */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
