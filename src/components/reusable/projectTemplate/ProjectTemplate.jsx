import React from "react";
import classes from "./ProjectTemplate.module.scss";
import { GrCode } from "react-icons/gr";

export default function ProjectTemplate({ image, title, link, language }) {
  return (
    <div className={classes.project_template}>
      <div className={classes.container}>
        <a href={link} target="_blank" rel="noreferrer">
          <div
            className={classes.img}
            style={{
              backgroundImage: `linear-gradient(
          rgba(6, 6, 6, 0.10), 
          rgba(6, 6, 6, 0.10)
        ), url(${image})`,
              height: "300px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              borderRadius: "10px 10px 0 0",
              cursor: "pointer",
            }}
          ></div>
        </a>
        <div className={classes.title}>{title}</div>
        <div className={classes.framework}>
          <div className={classes.__title}>{language}</div>
          <GrCode />
        </div>
      </div>
    </div>
  );
}
