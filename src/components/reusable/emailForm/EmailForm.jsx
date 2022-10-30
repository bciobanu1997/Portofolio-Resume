import React, { useRef } from "react";
import emailjs from "emailjs-com";
import classes from "./EmailForm.module.scss";
import { ToastContainer, toast } from "react-toastify";

export default function EmailForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const successAlert = () =>
      toast("Thank you for your message!", { autoClose: 4000 });
    emailjs
      .sendForm(
        "service_x80ls5a",
        "template_vbcaoto",
        form.current,
        `${process.env.REACT_APP_EMAIL_JS_KEY}`
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            successAlert();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div className={classes.emailForm}>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className={classes.nameInput}
        ></input>
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className={classes.nameInput}
        ></input>
        <textarea
          type="email"
          name="user_message"
          placeholder="Message"
          required
          className={classes.messageInput}
        />

        <button className={classes.submitButton} type="submit">
          <p>Send Message</p>
        </button>
      </form>
    </div>
  );
}
