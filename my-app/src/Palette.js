import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./Palette.css";
import Navbar from "./Navbar";

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
      <ColorBox key={box.hex} background={box[format]} name={box.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          handleFormatChange={this.handleFormatChange}
          handleScaleChange={this.handleScaleChange}
          scale={scale}
        />
        {/* nav bar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Palette;
