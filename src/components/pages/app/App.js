import React from "react";
import classes from "./App.module.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import { hotjar } from "react-hotjar";
function App() {
  //------------------------------>
  hotjar.initialize(
    process.env.REACT_APP_HOTJAR_ID,
    process.env.REACT_APP_HOTJAR_VERSION
  );
  //------------------------------>
  if (hotjar.initialized()) {
    hotjar.identify("USER_ID", { userProperty: "value" });
    // Add an event
  }
  //------------------------------>
  return (
    <div className={classes.app}>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
