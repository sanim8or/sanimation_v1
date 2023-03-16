import React from "react";
import "./slideSwitch.css";

const SlideSwitch = ({ whenClick, options }) => {
  const [slide, setSlide] = React.useState(false);
  const clickHandler = () => {
    whenClick();
    setSlide(!slide);
  };

  return (
    <div
      className={`slideWrapper ${slide ? "wrapperSlided" : null}`}
      onClick={clickHandler}
    >
      <span className={`optionsText ${slide ? "whiteText" : null}`}>
        {slide ? options[1] : options[0]}
      </span>
      <div className={`slideDot ${slide ? "dotSlided" : null}`}>
        <div className={`arrow ${slide ? "arrowSlided" : null}`}>{">"}</div>
      </div>
    </div>
  );
};

export default SlideSwitch;
