import React from "react";
import classes from "./ChapterName.module.scss";
export default function ChapterName({ title, subtitle, firstname, lastname }) {
  return (
    <div className={classes.chapterName}>
      <div className={classes.titleContainer}>
        <div className={classes.dash}></div>
        <div className={classes.title}>{title}</div>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.subtitle}>{subtitle}</div>
        <div className={classes.firstname}>{firstname}</div>
        <div className={classes.lastname}>{lastname}</div>
      </div>
    </div>
  );
}
