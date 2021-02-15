import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = ({ classes, color, name, handleDelete }) => {
  return (
    <CSSTransition timeout={5000} classNames="fade">
      <div style={{ backgroundColor: color }} className={classes.root}>
        <span>{name}</span>
        <DeleteIcon
          onClick={() => handleDelete(color)}
          className={classes.icon}
        />
      </div>
    </CSSTransition>
  );
};

export default SortableElement(withStyles(styles)(DraggableColorBox));
