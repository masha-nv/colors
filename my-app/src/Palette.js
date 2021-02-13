import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./Palette.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { withStyles } from "@material-ui/styles";

const styles = {};

class Palette extends Component {
  state = { scale: 500, format: "hex" };

  handleScaleChange = (scale) => {
    this.setState({ scale });
  };

  handleFormatChange = (val) => {
    this.setState({ format: val });
  };

  render() {
    const { palette } = this.props;
    const { scale, format } = this.state;
    const colorBoxes = palette.colors[scale].map((box) => (
      <ColorBox
        showingFullPalette={true}
        key={box.hex}
        background={box[format]}
        name={box.name}
        moreLink={true}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          handleFormatChange={this.handleFormatChange}
          handleScaleChange={this.handleScaleChange}
          scale={scale}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <Footer name={palette.paletteName} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
