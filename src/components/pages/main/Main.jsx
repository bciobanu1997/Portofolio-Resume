import React, { useState } from "react";
import Header from "../header/Header";
import AboutMe from "../aboutMe/AboutMe";
import Services from "../services/Services";
import Portofolios from "../portofolios/Portofolios";
import Experience from "../experience/Experience";
import Education from "../education/Education";
import Footer from "../footer/Footer";

export default function Main() {
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
