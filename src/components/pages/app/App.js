import React, { useState, useEffect } from "react";
import classes from "./App.module.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import Main from "../main/Main";
function App() {
  //------------------------------>

  //------------------------------>

  //------------------------------>
  return (
    <React.StrictMode>
      <div className={classes.app}>
        <HashRouter basename="/">
          <useScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </HashRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;
