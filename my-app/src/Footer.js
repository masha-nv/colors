import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/footerStyles";

const Footer = ({ name, classes }) => {
  return (
    <footer className={classes.root}>
      <p>{name}</p>
    </footer>
  );
};

export default withStyles(styles)(Footer);
