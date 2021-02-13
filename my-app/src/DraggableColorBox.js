import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    height: "25%",
    width: "20%",
    marginBottom: "-6px",
    display: "inline-block",
  },
};

const DraggableColorBox = ({ classes, color }) => {
  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      {color}
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
