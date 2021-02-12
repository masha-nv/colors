import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    height: "100vh",
    backgroundColor: "blue",
  },
  paletteList: {
    display: "grid",
    height: "700px",
    width: "80%",
    gridTemplateColumns: "repeat(3, 1fr)",
    ["@media (max-width: 950px)"]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    ["@media (max-width: 750px)"]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    gridGap: "2px",
    margin: "0 auto",
  },
  anchor: {
    textDecoration: "none",
    color: "#303542",
  },
  title: {
    color: "#fff",
    marginLeft: "10%",
    letterSpacing: "0.2rem",
  },
};

class PaletteList extends Component {
  state = {};
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <h1 className={classes.title}>React Colors</h1>
        <div className={classes.paletteList}>
          {palettes.map((palette) => (
            <Link
              className={classes.anchor}
              key={palette.id}
              to={"/palette/" + palette.id}
            >
              <div>
                <MiniPalette palette={palette} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
