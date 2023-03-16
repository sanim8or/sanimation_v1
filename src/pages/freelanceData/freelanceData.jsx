import React, { useState, useEffect } from "react";
import Airtable from "airtable";

import "./freelanceData.css";
import freelancerDatabase, { skillSets } from "./freelancerDatabase.js";
import FreelancerCard from "../../components/freelancerCard/freelancerCard";

const FreelanceDatabase = () => {
  const [data, setData] = useState([]);
  const [matrixFilteredData, setMatrixFilteredData] = useState([]);
  // AIRTABLE CONSTRUCTOR
  const base = new Airtable({ apiKey: "keygH6WWimyW7XOyS" }).base(
    "appsWMakZBRkmkJBm"
  );
  useEffect(() => {
    base("Table 1")
      .select({
        view: "Grid view",
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        setData(records);
      });
  }, []);

  // The Form filling states
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [skillPrim, setSkillPrim] = useState("");
  const [ehr, setEhr] = useState(0);
  const [skillSec, setSkillSec] = useState([]);
  const [skillStar, setSkillStar] = useState(0);
  const [portfolio, setPortfolio] = useState("");
  const [notes, setNotes] = useState("");

  const formClearer = () => {
    setName("");
    setNumber(0);
    setSkillPrim("");
    setEhr(0);
    setSkillSec([]);
    setSkillStar(0);
    setPortfolio("");
    setNotes("");
  };

  if (data.find((el) => el.fields.Number === number)) {
    alert("Record Exists");
    formClearer();
  }
  const handleSubmit = () => {
    if (skillPrim == "" || number == "" || name == "") {
      alert("Please Enter All Fields Details");
      return;
    }
    base("Table 1").create(
      [
        {
          fields: {
            Name: name,
            Number: number,
            PrimeSkill: skillPrim,
            SecSkills: skillSec,
            EHR: ehr,
            SkillStar: skillStar,
            Notes: notes,
            Portfolio: portfolio,
          },
        },
      ],
      (err, records) => {
        if (err) {
          console.log(err);
          return;
        }
        setData([...data, records]);
      }
    );
  };

  const handleRemove = (item) => {
    setSkillSec(skillSec.filter((i) => i !== item));
  };

  // Rest Code
  const numberOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const priceRangePerGrid = 1000;
  const [matrixSelected, setMatrixSelected] = useState([0, 0]);
  const [lastSelected, setLastSelected] = useState(null);
  const [matrixSkillSelect, setMatrixSkillSelect] = useState(skillSets[0]);

  const matrixHandler = (num) => {
    if (lastSelected) {
      document.getElementById(lastSelected).classList.remove("slctdMatrix");
      document.getElementById(num).classList.add("slctdMatrix");
      setLastSelected(num);
    } else {
      document.getElementById(num).classList.add("slctdMatrix");
      setLastSelected(num);
    }

    let columnNum = num % 4;
    if (columnNum == 0) {
      columnNum = 4;
    }

    let rowNum = Math.floor(num / 4);
    if (columnNum !== 4) {
      rowNum = rowNum + 1;
    }
    setMatrixSelected([columnNum, rowNum]);
    setMatrixFilteredData(
      data.filter((el) => {
        if (el.fields.EHR % priceRangePerGrid < 0) {
          return (
            el.fields.SkillStar == rowNum &&
            1 == columnNum &&
            el.fields.PrimeSkill == matrixSkillSelect
          );
        }
        if (el.fields.EHR % priceRangePerGrid == 0) {
          return (
            el.fields.SkillStar == rowNum &&
            Math.floor(el.fields.EHR / priceRangePerGrid) == columnNum &&
            el.fields.PrimeSkill == matrixSkillSelect
          );
        }
        if (el.fields.EHR % priceRangePerGrid > 0) {
          return (
            el.fields.SkillStar == rowNum &&
            Math.floor(el.fields.EHR / priceRangePerGrid) + 1 == columnNum &&
            el.fields.PrimeSkill == matrixSkillSelect
          );
        }
      })
    );
  };

  const clearMatrixFunction = () => {
    setMatrixFilteredData(data);
    setMatrixSelected([0, 0]);
    document.getElementById(lastSelected).classList.remove("slctdMatrix");
  };

  return (
    <div className="wrapper">
      <div className="contentWorks ">
        <div className="navbarRegion" />
        <div className="matrixInputContainer">
          <div className="matrixContainer">
            <div className="titleMatrix">Artists Matrix</div>
            <select
              className="categoryDropdown"
              value={matrixSkillSelect}
              onChange={(e) => setMatrixSkillSelect(e.target.value)}
            >
              {skillSets.map((sk) => {
                return (
                  <option key={sk} value={sk}>
                    {sk}
                  </option>
                );
              })}
            </select>
            <div className="clearCTA" onClick={clearMatrixFunction}>
              CLEAR
            </div>
            <div className="priceLabelContainer">
              <span>{priceRangePerGrid * 1}</span>
              <span>{priceRangePerGrid * 2}</span>
              <span>{priceRangePerGrid * 3}</span>
              <span>{priceRangePerGrid * 4}</span>
            </div>
            <div className="skillLabelsContainer">
              <span>{1}</span>
              <span>{2}</span>
              <span>{3}</span>
              <span>{4}</span>
            </div>
            <div className="gridMaster">
              {numberOfItems.map((e, index) => {
                return (
                  <div
                    id={e}
                    key={index}
                    className="gridItem"
                    onClick={() => {
                      matrixHandler(e, index);
                    }}
                  >
                    <span>{matrixSelected.toString()}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="inputWrapper">
            <div className="titleANDfieldContainer">
              Name
              <input
                style={{ padding: "10px" }}
                value={name}
                onChange={(i) => setName(i.target.value)}
              />
            </div>
            <div className="titleANDfieldContainer">
              Number
              <input
                style={{ padding: "10px" }}
                value={number}
                onChange={(i) => setNumber(parseInt(i.target.value))}
              />
            </div>

            <div className="titleANDfieldContainer">
              Primary Skill
              <select
                style={{ padding: "10px" }}
                value={skillPrim}
                onChange={(e) => {
                  setSkillPrim(e.target.value);
                  setSkillSec(skillSec.filter((sk) => sk !== skillPrim));
                }}
              >
                <option value="" disabled>
                  Select Primary skillset
                </option>
                {skillSets.map((sk) => {
                  return (
                    <option key={sk} value={sk}>
                      {sk}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="titleANDfieldContainer">
              Secondary Skill
              <select
                style={{ padding: "10px" }}
                value={skillSec[length - 1]}
                onChange={(e) => {
                  skillPrim == e.target.value
                    ? null
                    : skillSec.find((el) => el == e.target.value)
                    ? null
                    : setSkillSec([...skillSec, e.target.value]);
                }}
              >
                <option value="" disabled>
                  Select Secondary skillset
                </option>
                {skillSets.map((sk) => {
                  return (
                    <option key={sk} value={sk}>
                      {sk}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="selectedSecSkillsMaster">
              {skillSec.map((item, index) => (
                <div className="selectedSecSkillsWrapper" key={index}>
                  {item}
                  <button onClick={() => handleRemove(item)}>X</button>
                </div>
              ))}
            </div>
            <div className="titleANDfieldContainer">
              {"Est.Hourly Rate (EHR)"}
              <input
                type={"number"}
                style={{ padding: "10px" }}
                value={ehr}
                onChange={(i) => setEhr(parseInt(i.target.value))}
              />
            </div>
            <div className="titleANDfieldContainer">
              {"SkillStar (max4)"}
              <input
                type={"number"}
                style={{ padding: "10px" }}
                value={skillStar}
                onChange={(i) => {
                  i > 4 ? 0 : setSkillStar(parseInt(i.target.value));
                }}
              />
            </div>
            <div className="titleANDfieldContainer">
              {"Notes"}
              <input
                style={{ padding: "10px" }}
                value={notes}
                onChange={(i) => setNotes(i.target.value)}
              />
            </div>
            <div className="titleANDfieldContainer">
              {"Portfolio"}
              <input
                style={{ padding: "10px" }}
                value={portfolio}
                onChange={(i) => setPortfolio(i.target.value)}
              />
            </div>
            <div className="button" onClick={handleSubmit}>
              Submit
            </div>
          </div>
        </div>
        <div className="freelanceResultContainer">
          <div className="nameListWrapper">
            Freelancer Available
            {matrixFilteredData.map((el, index) => {
              let idd = el.id;
              let field = { ...el.fields };
              return <FreelancerCard fieldData={field} id={idd} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceDatabase;
