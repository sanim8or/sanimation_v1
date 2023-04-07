import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Airtable from "airtable";

import "./projectDetail.css";
import { dummy } from "../../../assets/images/projects/projectImages";
import BackCTA from "../../components/backCTA/BackCTA";

const ProjectDetailPage = () => {
  const [projectsArrayMaster, setProjectsArrayMaster] = useState([]);
  const [selectedProject, setSelectedProject] = useState(projectsArrayMaster);
  const [isLoading, setIsLoading] = useState(true);

  // AIRTABLE CONTSTRUCTOR
  const baseProjects = new Airtable({ apiKey: "keygH6WWimyW7XOyS" }).base(
    "app7lGIGmaif4WyyS"
  );
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
        setProjectsArrayMaster(records);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setSelectedProject(projectsArrayMaster.find((i) => i.id == id));
  }, [projectsArrayMaster]);

  // YAHI TAK HAI AIRTABLE SETUP
  const { id } = useParams();
  const projSlctd = selectedProject;
  const navigate = useNavigate();

  return (
    <div>
      <div className="topSpacer" />
      <div className="backCTAHolder-ProjectdetailsPage">
        <div
          onClick={() => navigate(-1)}
          className="backCTAHolder-ProjectdetailsPage-scaleDown"
        >
          <BackCTA title={"Back to Projects"} whiteT small />
        </div>
      </div>
      <div className="prjTitleWrapper">
        {isLoading ? "loading..." : projSlctd.fields.Project}
      </div>
      <div className="projImageHolder">
        {isLoading ? (
          "loading..."
        ) : (
          <img
            src={projSlctd.fields.Img ? projSlctd.fields.Img[0].url : dummy}
            className="projImage"
          />
        )}
      </div>
      <div className="topSpacer" />
    </div>
  );
};

export default ProjectDetailPage;
