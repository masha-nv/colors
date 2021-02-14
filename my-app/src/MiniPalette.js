import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/miniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const MiniPalette = ({ palette, classes, openDeleteDialog }) => {
  return (
    <div className={classes.root}>
      <DeleteIcon onClick={(e) => openDeleteDialog(e, palette)} />
      <div className={classes.container}>
        {palette.colors[500].map((color) => (
          <div
            key={color.hex}
            className={classes.miniBox}
            style={{ background: color.hex }}
          ></div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 className={classes.paletteName}>{palette.paletteName}</h4>
        <span>{palette.emoji}</span>
      </div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
