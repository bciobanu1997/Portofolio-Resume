import React from "react";
import classes from "./Portofolios.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import ChapterName from "../../reusable/chaptername/ChapterName";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectTemplate from "../../reusable/projectTemplate/ProjectTemplate";
import PortofolioData from "./PortofolioData";

const responsive = {
  0: { items: 1 },
  300: { items: 1 },
  400: { items: 1.2 },
  550: { items: 1.7 },
  600: { items: 2 },
  900: { items: 2.7 },
  1000: { items: 3 },
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
          disableButtonsControls={false}
          mouseTracking
          touchTracking
          className={classes.carousel}
          items={PortofolioData().map((data, index) => (
            <ProjectTemplate
              key={index}
              image={data.image}
              title={data.title}
              link={data.link}
              language={data.language}
            />
          ))}
        />
      </div>
    </div>
  );
}
