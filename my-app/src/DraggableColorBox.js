import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

import styles from "./styles/DraggableColorBoxStyles";

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
