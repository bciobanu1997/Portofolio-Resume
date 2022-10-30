import { useState } from "react";
import classes from "./Header.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { MdDesignServices, MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { HiMenuAlt1 } from "react-icons/hi";
import { SiProgress } from "react-icons/si";
import { CgClose } from "react-icons/cg";
import Logo from "../../../assets/logos/logo.png";
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
    <header className={`${classes.header} ${adaptive._container}`}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <div className={classes.img}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={classes.name}>Boris</div>
        </div>
        <div className={classes.navs}>
          <nav
            className={`${classes.navleft} ${
              menuOpen ? classes.isMenuLeft : ""
            }`}
          >
            <ul>
              <li>
                {width < md3 ? (
                  <MdDesignServices className={classes.logo} />
                ) : (
                  ""
                )}
                Services
              </li>

              <li>
                {width < md3 ? <GrProjects className={classes.logo} /> : ""}
                Portofolios
              </li>

              <li>
                {width < md3 ? <SiProgress className={classes.logo} /> : ""}
                Experience
              </li>
              <li>
                {width < md3 ? (
                  <MdOutlineContactPhone className={classes.logo} />
                ) : (
                  ""
                )}
                Contact
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
