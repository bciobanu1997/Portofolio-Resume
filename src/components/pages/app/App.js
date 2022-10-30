import React from "react";
import classes from "./App.module.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../main/Main";
function App() {
  //------------------------------>

  //------------------------------>

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
