import { useState } from "react";
import classes from "./Header.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { MdDesignServices, MdOutlineContactPhone } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { HiMenuAlt1 } from "react-icons/hi";
import { SiProgress } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logos/logo.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const md3 = 767.98;
  const { width } = useWindowDimensions();

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
              <Link to={"/"}>
                <li>
                  {width < md3 ? (
                    <MdDesignServices className={classes.logo} />
                  ) : (
                    ""
                  )}
                  Services
                </li>
              </Link>
              <Link to={"/products"}>
                <li>
                  {width < md3 ? <GrProjects className={classes.logo} /> : ""}
                  Portofolios
                </li>
              </Link>

              <Link to={"/products"}>
                <li>
                  {width < md3 ? <BiCodeAlt className={classes.logo} /> : ""}
                  Blog
                </li>
              </Link>

              <Link to={"/about"}>
                <li>
                  {width < md3 ? <SiProgress className={classes.logo} /> : ""}
                  Experience
                </li>
              </Link>
              <Link to={"/about"}>
                <li>
                  {width < md3 ? (
                    <MdOutlineContactPhone className={classes.logo} />
                  ) : (
                    ""
                  )}
                  Contact
                </li>
              </Link>
            </ul>
          </nav>
          <nav className={classes.cart_nav}>
            <ul>
              <Link to={"/cart"} className={classes.cart}>
                <li>
                  <div className={classes.title}>Resume</div>
                </li>
              </Link>
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
