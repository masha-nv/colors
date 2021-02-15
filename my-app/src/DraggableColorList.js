import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/DraggableColorList";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const DraggableColorList = SortableContainer(
  ({ colors, handleDelete, classes }) => {
    return (
      <div className={classes.root}>
        {colors.map((color, i) => (
          <DraggableColorBox
            index={i}
            handleDelete={handleDelete}
            key={Math.random()}
            color={color.color}
            name={color.name}
          />
        ))}
      </div>
    );
  }
);

export default withStyles(styles)(DraggableColorList);
