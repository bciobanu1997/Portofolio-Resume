import React from "react";
import classes from "./Work.module.scss";
export default function Work({
  title,
  location,
  date,
  language,
  task1,
  task2,
  task3,
  task4,
}) {
  return (
    <div className={classes.work}>
      <div className={classes.title}>{title}</div>
      <div className={classes.location}>{location}</div>
      <div className={classes.date}>{date}</div>
      <div className={classes.languages}>{language}</div>
      <div className={classes.delimiter}></div>
      <div className={classes.duties}>
        {task1 ? <div className={classes.dutydelimiter}></div> : ""}
        <div className={classes.task}>{task1}</div>
      </div>
      <div className={classes.duties}>
        {task2 ? <div className={classes.dutydelimiter}></div> : ""}
        <div className={classes.task}>{task2}</div>
      </div>
      <div className={classes.duties}>
        {task3 ? <div className={classes.dutydelimiter}></div> : ""}
        <div className={classes.task}>{task3}</div>
      </div>
      <div className={classes.duties}>
        {task4 ? <div className={classes.dutydelimiter}></div> : ""}
        <div className={classes.task}>{task4}</div>
      </div>
    </div>
  );
}
