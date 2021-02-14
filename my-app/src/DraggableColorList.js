import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    display: "flex",
    height: "100%",
    flexWrap: "wrap",
    position: "relative",
    alignContent: "start",
  },
};

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
