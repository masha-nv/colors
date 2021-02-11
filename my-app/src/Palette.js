import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./Palette.css";
import Navbar from "./Navbar";

class Palette extends Component {
  state = { scale: 500 };

  handleScaleChange = (scale) => {
    console.log(scale);
    this.setState({ scale });
  };

  render() {
    const { palette } = this.props;
    const { scale } = this.state;
    const colorBoxes = palette.colors[scale].map((box) => (
      <ColorBox key={box.hex} background={box.hex} name={box.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          handleScaleChange={this.handleScaleChange}
          scale={this.state.scale}
        />
        {/* nav bar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Palette;
