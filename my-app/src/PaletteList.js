import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteListStyles";

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <h1 className={classes.title}>React Colors</h1>
          <Link to="/palette/new">Create New Palette</Link>
        </div>
        <div className={classes.paletteList}>
          {palettes.map((palette) => (
            <Link key={palette.id} to={"/palette/" + palette.id}>
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
