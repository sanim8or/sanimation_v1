import React from "react";
import { useParams } from "react-router-dom";

import "./projectDetail.css";
import { projArray } from "../../../assets/Data/worksData";
import { dummy } from "../../../assets/images/projects";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const realID = id - 290;
  const projSlctd = projArray.find((i) => i.id === realID);

  return (
    <div>
      <div className="topSpacer" />
      <div className="prjTitleWrapper">{projSlctd.prName}</div>
      <div className="projImageHolder">
        <img
          src={projSlctd.img ? projSlctd.img : dummy}
          className="projImage"
        />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
