import React from "react";
import classes from "./Portofolios.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import ChapterName from "../../reusable/chaptername/ChapterName";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectTemplate from "../../reusable/projectTemplate/ProjectTemplate";
import Project1 from "../../../assets/img/project1.png";
import Project2 from "../../../assets/img/project2.png";
import Project3 from "../../../assets/img/project3.png";
import Project4 from "../../../assets/img/project4.png";
const items = [
  <ProjectTemplate
    image={Project1}
    title={"Finance Website"}
    link={"https://bciobanu1997.github.io/DemoLandingV1/"}
    language={"HTML CSS"}
  />,
  <ProjectTemplate
    image={Project3}
    title={"E-Commerce Website"}
    link={" https://meliorastore.co.uk"}
    language={"React"}
  />,
  <ProjectTemplate
    image={Project4}
    title={"Medical Quotes Website"}
    link={"https://bciobanu1997.github.io/DemoLandingV2/"}
    language={"HTML CSS"}
  />,
  <ProjectTemplate
    image={Project2}
    title={"Portofolio Website"}
    language={"React"}
    link={""}
  />,
];
const responsive = {
  0: { items: 1 },
  400: { items: 1 },
  550: { items: 2 },
  900: { items: 3 },
};
export default function Portofolios() {
  return (
    <div className={adaptive._container} id="portofolios">
      <div className={classes.portofolios}>
        <div className={classes.title}>
          <ChapterName title={"My works"} subtitle={"Featured Portfolios"} />
        </div>
        <AliceCarousel
          responsive={responsive}
          disableButtonsControls={true}
          mouseTracking
          touchTracking
          className={classes.carousel}
          items={items}
        />
      </div>
    </div>
  );
}
