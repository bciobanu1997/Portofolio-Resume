import React from "react";
import classes from "./Education.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import ChapterName from "../../reusable/chaptername/ChapterName";
import Learning from "../../reusable/learning/Learning";
export default function Education() {
  const skills = [
    { type: "HTML", level: 75 },
    { type: "CSS", level: 77 },
    { type: "JavaScript", level: 55 },
    { type: "React.js", level: 62 },
    { type: "SQL", level: 70 },
    { type: "Figma", level: 73 },
  ];
  return (
    <div className={adaptive._container}>
      <div className={classes.title}>
        <ChapterName title={"learning path"} subtitle={"Education & Skills"} />
      </div>
      <div className={classes.container}>
        <div className={classes.education}>
          <Learning
            institution={"Step IT Academy"}
            location={"Republic of Moldova, 2022"}
            field={"Diploma's degree - Java Programming"}
          />
          <Learning
            institution={"Technical University"}
            location={"Republic of Moldova, 2016 - 2020"}
            field={"Bachelor's degree - Informational Security"}
          />
          <Learning
            institution={"Mircea Eliade School"}
            location={"Republic of Moldova, 2004 - 2016"}
            field={"Diploma's degree - Mathematics"}
            lineInvisible={true}
          />
        </div>
        <div className={classes.skills}>
          <div className={classes.description}>
            For 2+ years, I have been continuously learning in the field of
            front-end and experimenting with new technologies and frameworks,
            and here you can see a summary of my skills.
          </div>
          <ul className={classes.bar}>
            {skills.map((skill, index) => (
              <div className={classes.skill}>
                {skill.type}
                <li
                  key={skill.type}
                  style={{
                    width: `${skill.level}%`,
                    height: "5px",
                    backgroundColor: `hsl(${2451}, ${43}%, ${
                      100 / (index + 3.5)
                    }%)`,
                  }}
                ></li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
