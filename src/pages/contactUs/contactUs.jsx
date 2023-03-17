import React, { useState } from "react";

import "./contactUs.css";
import BackCTA from "../../components/backCTA/BackCTA";
import backArrowSVG from "../../../assets/svgs/back-white.svg";
import { Link } from "react-router-dom";
import Cities from "../../components/cities/Cities";
import SlideSwitch from "../../components/slideSwitch/slideSwitch";

// QUESTION TEXT MAKER FUNCTION --------------------------
const QuestionText = ({ title }) => {
  return (
    <div>
      <p className="questionTitle">{title}</p>
      <p className="questiondot">.</p>
    </div>
  );
};

// CATEGORY OPTIONS --------------------------
const categoryOptions = ["Partner", "Investor"];

// PARTNER QUESTION COMPONENT --------------------------
const PartnerQuestions = () => {
  const [quick, setQuick] = useState(false);
  const [qual, setQual] = useState(false);
  const [cost, setCost] = useState(false);
  const priortyHandler = (value) => {
    if (value == "quick") {
      if (cost == true && qual == true) {
        setQuick(false);
        console.log("cost & qual on hai beta");
      } else setQuick(!quick);
    }
    if (value == "qual") {
      if (quick == true && cost == true) {
        setQual(false);
        console.log("cost & quick on hai beta");
      } else setQual(!qual);
    }
    if (value == "cost") {
      if (quick == true && qual == true) {
        setCost(false);
        console.log("quality & quick on hai beta");
      } else setCost(!cost);
    }
  };
  return (
    <>
      <div className="priorityHolder grid-child2">
        <div>
          <QuestionText title="2 Focus Priorities" />
          <p className={`priorityQuestionTextWrapper`}>
            Pick just two of these, and we'll have a better idea of where this
            project stands.
          </p>
        </div>
        <div className="optionsHolder">
          <div
            className={quick ? "optionContainer selected" : "optionContainer"}
            onClick={() => priortyHandler("quick")}
          >
            Quick
            <p>Need as early as possible</p>
          </div>
          <div
            className={qual ? "optionContainer selected" : "optionContainer"}
            onClick={() => priortyHandler("qual")}
          >
            Quality
            <p>Need to be Best Quality</p>
          </div>
          <div
            className={cost ? "optionContainer selected" : "optionContainer"}
            onClick={() => priortyHandler("cost")}
          >
            cost
            <p>Need to be lowest in cost</p>
          </div>
        </div>
      </div>
      <div className="questionbasicGrid projectHolder">
        <div>
          <QuestionText title="Project Budget" />
          <input type="text" required="required" className="inputBasic" />
        </div>
        <div>
          <QuestionText title="Project Deadline" />
          <input type="text" className="inputBasic" />
        </div>
        <div>
          <QuestionText title="Drop a Note" />
          <input type="text" className="inputBasic" />
        </div>
        <div>
          <QuestionText title="How you Discovered us" />
          <input type="text" required="required" className="inputBasic" />
        </div>
      </div>
    </>
  );
};

// INVESTOR QUESTION COMPONENT --------------------------
const InvestorQuestions = () => {
  return (
    <>
      <div className="questionbasicGrid projectHolder grid-child2">
        <div>
          <QuestionText title="Message" />
          <input type="text" required="required" className="inputBasic" />
        </div>
        <div>
          <QuestionText title="Investment Amount" />
          <input type="text" className="inputBasic" />
        </div>
        <div>
          <QuestionText title="You can either give  a Note" />
        </div>
      </div>
    </>
  );
};

// COMMON MAIN QUESTION COMPONENT --------------------------
const ContactUs = () => {
  const [category, setCategory] = useState(categoryOptions[0]);
  const switchHandler = () => {
    if (category == categoryOptions[0]) {
      setCategory(categoryOptions[1]);
    }
    if (category == categoryOptions[1]) {
      setCategory(categoryOptions[0]);
    }
  };

  return (
    <div>
      <div className="contactUsPageHero">
        <div className="unitFirst">
          <BackCTA title="Let's Connect" url="/" whiteT={true} />
          <div className="redStroke" />
          <span className="underlyingText">
            Just fill out the form below and let's connect!
          </span>
        </div>
        <div className="gradientBlendWhite" />
      </div>
      <div className="contactForm-master">
        <div className="contactForm-container">
          <div className="contactForm-connectAs">
            <QuestionText title="Connect with us as" />
            <div className="sliderContent">
              <SlideSwitch
                whenClick={switchHandler}
                options={[categoryOptions[0], categoryOptions[1]]}
              />
            </div>
          </div>
          <div className="questionbasicGrid contactHolder">
            <div>
              <QuestionText title="Your Name" />
              <input type="text" required="required" className="inputBasic" />
            </div>
            <div>
              <QuestionText title="Email Address" />
              <input type="email" required="required" className="inputBasic" />
            </div>
            <div>
              <QuestionText title="Company Name" />
              <input type="text" required="required" className="inputBasic" />
            </div>
            <div>
              <QuestionText title="Contact Number" />
              <input type="number" required="required" className="inputBasic" />
            </div>
          </div>
          {category == categoryOptions[1] ? (
            <InvestorQuestions />
          ) : (
            <PartnerQuestions />
          )}
          <Link className="submitCTAContainer">
            <p>Submit</p>
            <div className="flexendarrow">
              <img src={backArrowSVG} className="submitArrow" />
            </div>
          </Link>
        </div>
      </div>
      <Cities white={true} />
    </div>
  );
};

export default ContactUs;
