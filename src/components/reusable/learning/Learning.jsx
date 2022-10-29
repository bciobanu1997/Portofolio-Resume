import React from "react";
import classes from "./Learning.module.scss";
export default function Learning({
  institution,
  location,
  field,
  lineInvisible,
}) {
  return (
    <div className={classes.learning}>
      <div className={classes.progress}>
        <div className={classes.dot}></div>
        {!lineInvisible ? <div className={classes.line}></div> : ""}
      </div>
      <div className={classes.information}>
        <div className={classes.institution}>{institution}</div>
        <div className={classes.field}>{field}</div>
        <div className={classes.location}>{location}</div>
      </div>
    </div>
  );
}
