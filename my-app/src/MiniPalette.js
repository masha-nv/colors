import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/miniPaletteStyles";

const MiniPalette = ({ palette, classes }) => {
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.container}>
          {palette.colors[500].map((color) => (
            <div
              key={color.hex}
              className={classes.miniBox}
              style={{ background: color.hex }}
            ></div>
          ))}
        </div>
        <h4 className={classes.paletteName}>{palette.paletteName}</h4>
      </div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
