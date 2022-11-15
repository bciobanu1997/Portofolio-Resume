import React from "react";
import classes from "./App.module.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import { hotjar } from "react-hotjar";
import ScrollToTop from "../../hooks/useScrollToTop";
import { clarity } from "react-microsoft-clarity";
import ReactGA from "react-ga";
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
ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ANALYTICS_TOKEN}`);
ReactGA.pageview(window.location.pathname + window.location.search);
clarity.init(process.env.REACT_APP_CLARITY_ID);
//------------------------------>

function App() {
  return (
    <div className={classes.app}>
      <HashRouter basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
