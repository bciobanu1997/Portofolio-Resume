import React from "react";
import classes from "./Services.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import ChapterName from "../../reusable/chaptername/ChapterName";
import Specialized from "../../reusable/specialized/Specialized";
import { SiAntdesign } from "react-icons/si";
import { FiGlobe, FiSettings } from "react-icons/fi";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <Specialized
    title={"UI/UX Design"}
    description={
      "Turn what you have in mind of a digital product into reality. For any platform you consider."
    }
  >
    <SiAntdesign />
  </Specialized>,
  <Specialized
    title={"App Development"}
    description={
      "Turn what you have in mind of a digital product into reality. For any platform you consider."
    }
  >
    <FiSettings />
  </Specialized>,
  <Specialized
    title={"Web Development"}
    description={
      "Turn what you have in mind of a digital product into reality. For any platform you consider."
    }
  >
    <FiGlobe />
  </Specialized>,
];
const responsive = {
  0: { items: 2 },
  400: { items: 2 },
  650: { items: 3 },
};
export default function Services() {
  return (
    <div className={classes.services}>
      <div className={adaptive._container}>
        <div className={classes.title}>
          <ChapterName title={"services"} subtitle={"Specialized in"} />
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
