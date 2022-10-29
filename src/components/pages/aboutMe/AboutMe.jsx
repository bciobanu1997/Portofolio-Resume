import React from "react";
import classes from "./AboutMe.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import ChapterName from "../../reusable/chaptername/ChapterName";
import useWindowDimensions from "../../hooks/useWindowDimension";
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
        <div className={classes.profilePhoto}></div>
      </div>
    </div>
  );
}
