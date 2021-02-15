import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    height: "100vh",
    width: "100vw",
    position: "fixed",
  },
};

const Page = ({ children, classes }) => {
  return <div className={classes.root}>{children}</div>;
};

export default withStyles(styles)(Page);
