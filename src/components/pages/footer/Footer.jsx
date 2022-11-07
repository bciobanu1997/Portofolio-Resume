import React from "react";
import classes from "./Footer.module.scss";
import adaptive from "../../constants/screenSize.module.scss";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import EmailForm from "../../reusable/emailForm/EmailForm";
export default function Footer() {
  function ContactsForm(icon, title, subtitle) {
    return (
      <div className={classes.contacts}>
        <div className={classes.icon}>{icon}</div>
        <div className={classes.text}>
          <div className={classes.title}>{title}</div>
          <div className={classes.subtitle}>{subtitle}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.footer} id="contact">
      <div className={adaptive._container}>
        <div className={classes.form}>
          <div className={classes.emailForm}>
            <EmailForm />
          </div>
          <div className={classes.contactsForm}>
            {ContactsForm(<CiLocationOn />, "Address", "London,Great Britain")}
            <a href="tel:+447440488181">
              {ContactsForm(<BsTelephone />, "Phone", "07440488181")}
            </a>
            <a href="mailto:boris.ciobanuu@gmail.com">
              {" "}
              {ContactsForm(<CiMail />, "Mail", "boris.ciobanuu@gmail.com")}
            </a>
          </div>
        </div>
        <div className={classes.links}>
          <a
            href="https://github.com/bciobanu1997?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/boris-ciobanu-0790a3189/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://twitter.com/BorisCiobanu"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
          <a href="mailto:boris.ciobanuu@gmail.com">
            <FiMail />
          </a>
          <div className={classes.author}>©2022 - Boris</div>
        </div>
      </div>
    </div>
  );
}
