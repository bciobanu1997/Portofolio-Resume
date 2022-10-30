import React from "react";
import classes from "./AboutMe.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import ChapterName from "../../reusable/chaptername/ChapterName";
import useWindowDimensions from "../../hooks/useWindowDimension";
import Avatar from "../../../assets/img/avatar.png";
import styled, { keyframes } from "styled-components";
import { rollIn } from "react-animations";
const RotateInAnimation = keyframes`${rollIn}`;
const RotateInDiv = styled.div`
  animation: infinite 5s ${RotateInAnimation};
`;
export default function AboutMe() {
  const { width } = useWindowDimensions();
  const md4 = 600.98;
  return (
    <div className={adaptive._container}>
      <div className={classes.aboutme}>
        <div className={classes.introduction}>
          <ChapterName
            title={"my name is"}
            firstname={"Boris"}
            lastname={"Ciobanu"}
          />
          <div className={classes.description}>
            Energetic and enthusiastic Junior Front-End developer, who relishes
            a challenge and has a desire to learn and grow in a collaborative
            team environment. Proficient in JavaScript, CSS, and React.
            Passionate about UI/UX
          </div>
        </div>
        <RotateInDiv>
          <div
            className={classes.profilePhoto}
            style={{
              backgroundImage: `url(${Avatar})`,
              height: "15vw",
              width: "15vw",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          ></div>
        </RotateInDiv>
      </div>
    </div>
  );
}
