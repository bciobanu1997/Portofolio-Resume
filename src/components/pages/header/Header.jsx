import React, { useState, useEffect } from "react";
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
import useComponentVisible from "../../hooks/useComponentVisible";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const md3 = 767.98;
  const { width } = useWindowDimensions();
  // using to detect click on page
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);
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
  // detect click on page and close menu
  useEffect(() => {
    if (isComponentVisible == false) {
      setMenuOpen(false);
      setIsComponentVisible(true);
    }
  }, [isComponentVisible]);
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
        <div className={classes.navs} ref={ref}>
          {
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
                    onClick={width < md3 ? menuToggleHandler : ""}
                  >
                    {width < md3 ? (
                      <MdDesignServices className={classes.logo} />
                    ) : (
                      ""
                    )}
                    <div className={classes.menuTitle}>Services</div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="portofolios"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={width < md3 ? menuToggleHandler : ""}
                  >
                    {width < md3 ? <GrProjects className={classes.logo} /> : ""}
                    <div className={classes.menuTitle}>Portofolios</div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={width < md3 ? menuToggleHandler : ""}
                  >
                    {width < md3 ? <SiProgress className={classes.logo} /> : ""}
                    <div className={classes.menuTitle}>Experience</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                    onClick={width < md3 ? menuToggleHandler : ""}
                  >
                    {width < md3 ? (
                      <MdOutlineContactPhone className={classes.logo} />
                    ) : (
                      ""
                    )}
                    <div className={classes.menuTitle}>Contact</div>
                  </Link>
                </li>
              </ul>
            </nav>
          }

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
