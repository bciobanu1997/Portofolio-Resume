import React from "react";
import classes from "./Specialized.module.scss";
import styled, { keyframes } from "styled-components";
import { flip } from "react-animations";
export default function Specialized({ children, title, description }) {
  const bounceAnimation = keyframes`${flip}`;

  const BouncyDiv = styled.div`
    animation: infinite 3s ${bounceAnimation};
  `;
  return (
    <div className={classes.specialized}>
      <div className={classes.logo}>
        <BouncyDiv>{children}</BouncyDiv>
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
}
