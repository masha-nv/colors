import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import chroma from "chroma-js";
import { SortableElement } from "react-sortable-hoc";

const styles = {
  root: {
    display: "inline-block",
    height: "25%",
    width: "20%",
    marginBottom: "0px",
    position: "relative",
    cursor: "pointer",
    "& span": {
      position: "absolute",
      bottom: 0,
      padding: "2px",
      paddingLeft: "4px",
      letterSpacing: "1px",
      color: (props) =>
        chroma(props.color).luminance() <= 0.3 ? "#ccc" : "#2a303a",
    },
  },
  icon: {
    padding: "2px",
    paddingRight: "4px",
    color: "#2a303a",
    position: "absolute",
    bottom: 0,
    right: 0,
    fontSize: "1.4rem",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      padding: 0,
    },
    transition: "all .3s ease-in-out ",
  },
};

const DraggableColorBox = ({ classes, color, name, handleDelete }) => {
  return (
    <div style={{ backgroundColor: color }} className={classes.root}>
      <span>{name}</span>
      <DeleteIcon
        onClick={() => handleDelete(color)}
        className={classes.icon}
      />
    </div>
  );
};

export default SortableElement(withStyles(styles)(DraggableColorBox));
