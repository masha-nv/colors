import React, { Component } from "react";
import ColorShadesNav from "./ColorShadesNav";
import ColorBox from "./colorBox";
import { withStyles } from "@material-ui/styles";
import Footer from "./Footer";
import styles from "./styles/colorShadesStyles";

class ColorShades extends Component {
  state = { format: "hex", copied: false, copiedColor: "" };

  handleCopy = (color) => {
    this.setState({ copied: true, copiedColor: color });
    setTimeout(() => {
      this.setState({ copied: false, copiedColor: "" });
    }, 1600);
  };

  handleFormatChange = (format) => {
    this.setState({ format });
  };

  render() {
    const { shades, classes } = this.props;
    const colorBoxes = shades.map((shade) => (
      <ColorBox
        showingFullPalette={false}
        key={shade.hex}
        name={shade.name}
        background={shade[this.state.format]}
      />
    ));

    return (
      <div>
        <ColorShadesNav
          shades={shades}
          handleFormatChange={this.handleFormatChange}
        />
        <div className={classes.root}>
          <div className={classes.colorBoxes}>{colorBoxes}</div>
        </div>
        <Footer name={shades[0].id.toUpperCase()} />
      </div>
    );
  }
}

export default withStyles(styles)(ColorShades);
