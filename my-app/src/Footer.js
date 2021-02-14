import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/footerStyles";

const Footer = ({ name, classes, emoji }) => {
  return (
    <footer className={classes.root}>
      <p>{name}</p>
      <p>{emoji}</p>
    </footer>
  );
};

export default withStyles(styles)(Footer);
