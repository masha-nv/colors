import React from "react";
import "./MiniPalette.css";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    border: "15px solid white",
    borderRadius: "12px",
    margin: "0 9px 9px 0",
    background: "white",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    height: "200px",
  },
  miniBox: {
    height: "100%",
  },
  paletteName: {
    textAlign: "left",
    marginTop: 0,
    marginBottom: 0,
    letterSpacing: "0.02rem",
    padding: "7px",
  },
};

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
