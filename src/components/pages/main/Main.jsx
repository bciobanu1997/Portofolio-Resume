import React, { useState, useCallback, useEffect } from "react";
import Header from "../header/Header";
import AboutMe from "../aboutMe/AboutMe";
import Services from "../services/Services";
import Portofolios from "../portofolios/Portofolios";
import Experience from "../experience/Experience";
import Education from "../education/Education";
import Footer from "../footer/Footer";
import ScrollToTop from "../../hooks/useScrollToTop";

export default function Main() {
  //------------------------------>

  const resetWindowScrollPosition = useCallback(
    () => window.scrollTo(0, 0),
    []
  );

  useEffect(() => {
    window.onbeforeunload = function () {
      resetWindowScrollPosition();
    };
  }, [resetWindowScrollPosition]);
  return (
    <div>
      <Header />
      <AboutMe />
      <Services />
      <Portofolios />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}
