import React from "react";
import classes from "./Footer.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <div className={adaptive._container}>
      <div className={classes.footer}>
        <div className={classes.links}>
          <a href="https://github.com/bciobanu1997?tab=repositories">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/boris-ciobanu-0790a3189/">
            <FiLinkedin />
          </a>
          <a href="https://twitter.com/BorisCiobanu">
            <FiTwitter />
          </a>
          <a href="mailto:boris.ciobanuu@gmail.com">
            <FiMail />
          </a>
        </div>
        <div className={classes.author}>©2020 - Boris</div>
      </div>
    </div>
  );
}
