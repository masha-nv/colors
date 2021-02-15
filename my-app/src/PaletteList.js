import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteListStyles";
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";

class PaletteList extends Component {
  render() {
    const { palettes, classes, deletePalette } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <div className={classes.header}>
            <h1 className={classes.title}>React Colors</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </div>
          <TransitionGroup className={classes.paletteList}>
            {/* <div className={classes.paletteList}> */}
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} timeout={500} classNames="fade">
                <Link key={palette.id} to={"/palette/" + palette.id}>
                  <MiniPalette
                    palette={palette}
                    deletePalette={deletePalette}
                  />
                </Link>
              </CSSTransition>
            ))}
            {/* </div> */}
          </TransitionGroup>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PaletteList);
