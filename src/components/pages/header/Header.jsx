import React, { useState } from "react";
import classes from "./Header.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { MdDesignServices, MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { HiMenuAlt1 } from "react-icons/hi";
import { SiProgress } from "react-icons/si";
import { CgClose } from "react-icons/cg";
import Logo from "../../../assets/logos/logo.png";
import { Link } from "react-scroll";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const md3 = 767.98;
  const { width } = useWindowDimensions();
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CiobanuBorisResume.pdf";
        alink.target = "_blank";
        alink.click();
      });
    });
  };
  return (
    <header className={`${classes.header}`}>
      <div className={`${classes.content} ${adaptive._container}`}>
        <div className={classes.logo}>
          <div className={classes.img}>
            <img src={Logo} alt="logo" />
          </div>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <div className={classes.name}>Boris</div>
          </Link>
        </div>
        <div className={classes.navs}>
          <nav
            className={`${classes.navleft} ${
              menuOpen ? classes.isMenuLeft : ""
            }`}
          >
            <ul>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {width < md3 ? (
                    <MdDesignServices className={classes.logo} />
                  ) : (
                    ""
                  )}
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="portofolios"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {width < md3 ? <GrProjects className={classes.logo} /> : ""}
                  Portofolios
                </Link>
              </li>

              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {width < md3 ? <SiProgress className={classes.logo} /> : ""}
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                >
                  {width < md3 ? (
                    <MdOutlineContactPhone className={classes.logo} />
                  ) : (
                    ""
                  )}
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <nav className={classes.cart_nav}>
            <ul>
              <div className={classes.cart}>
                <li>
                  <div className={classes.title} onClick={onButtonClick}>
                    Resume
                  </div>
                </li>
              </div>
            </ul>
          </nav>
          <div className={classes.toggle}>
            {!menuOpen ? (
              <HiMenuAlt1 onClick={menuToggleHandler} />
            ) : (
              <CgClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
