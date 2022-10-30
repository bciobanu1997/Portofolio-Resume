import React from "react";
import classes from "./Experience.module.scss";
import { useState } from "react";
import adaptive from "../../constants/screenSize.module.scss";
import ChapterName from "../../reusable/chaptername/ChapterName";
import Work from "../../reusable/work/Work";
import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
const FadeInAnimation = keyframes`${fadeInRight}`;
const FadeInDiv = styled.div`
  animation: 2s ${FadeInAnimation};
`;
export default function Experience() {
  const [showInfo, setShowInfo] = useState("ShowCard1");

  function customButton(btnName, actionValue) {
    return (
      <button
        onClick={() => {
          setShowInfo(actionValue);
        }}
        style={{ color: actionValue === showInfo ? "#7E74F1" : "#181818" }}
        className={classes.btn}
      >
        {btnName}
      </button>
    );
  }
  return (
    <div className={classes.experience} id="experience">
      <div className={adaptive._container}>
        <div className={classes.container}>
          <div className={classes.subjectColumn}>
            <div className={classes.title}>
              <ChapterName title={"career path"} subtitle={"Work Experience"} />
            </div>
            <div className={classes.subjects}>
              {customButton("Self-Employed", "ShowCard1")}
              {customButton("Mitchellson", "ShowCard2")}
              {customButton("Orange Systems", "ShowCard3")}
            </div>
          </div>
          <div className={classes.descriptionColumn}>
            {showInfo === "ShowCard1" && (
              <FadeInDiv>
                {" "}
                <Work
                  title={"Front-end Developer"}
                  location={"London, Great Britain"}
                  date={"Jan 2022 - Present"}
                  language={"React"}
                  task1={
                    "Improving overall website performance for mobile users."
                  }
                  task2={
                    "Design and developing a prototype of e-commerce website using React."
                  }
                  task3={
                    "Implementing Stripe payment service and Commers JS API."
                  }
                  task4={
                    "Implementing adaptive and responsive application design for all screens."
                  }
                />
              </FadeInDiv>
            )}
            {showInfo === "ShowCard2" && (
              <FadeInDiv>
                {" "}
                <Work
                  title={"Self-Employed"}
                  location={"London, Great Bwritain"}
                  date={"Sep 2019 - Dec 2021"}
                  task1={"Whilst working and study programming languages."}
                />
              </FadeInDiv>
            )}
            {showInfo === "ShowCard3" && (
              <FadeInDiv>
                {" "}
                <Work
                  title={"Custom Operation Agent"}
                  location={"Chisinau, Republic of Moldova"}
                  date={"Jun 2018 - Jun 2019"}
                  task1={
                    "Researching and updating all required materials needed for clients and partners."
                  }
                  task2={
                    "Providing feedback to developers about issues occurred during settings changing."
                  }
                  task3={
                    "Improving operations and resolving issues to deliver top-notch customer service."
                  }
                  task4={
                    "Analysis of technical specification of every customer profile."
                  }
                />
              </FadeInDiv>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
