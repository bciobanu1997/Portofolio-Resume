import React from "react";
import Project1 from "../../../assets/img/project1.png";
import Project2 from "../../../assets/img/project2.png";
import Project3 from "../../../assets/img/project3.png";
import Project4 from "../../../assets/img/project4.png";
import Project5 from "../../../assets/img/project5.png";
export default function PortofolioData() {
  return [
    {
      id: 1,
      title: "Web Services",
      image: Project5,
      link: "",
      language: "React JS | In Progress",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      image: Project3,
      link: "https://meliorastore.co.uk",
      language: "React JS",
    },
    {
      id: 3,
      title: "Finance Website",
      image: Project1,
      link: "https://bciobanu1997.github.io/DemoLandingV1/",
      language: "HTML CSS",
    },
    {
      id: 4,
      title: "Medical Quotes Website",
      image: Project4,
      link: "https://bciobanu1997.github.io/DemoLandingV2/",
      language: "HTML CSS",
    },
    {
      id: 5,
      title: "Portofolio Website",
      image: Project2,
      link: "",
      language: "React",
    },
  ];
}
