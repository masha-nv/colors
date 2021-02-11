import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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
        <Slider
          min={100}
          max={900}
          step={100}
          defaultValue={scale}
          onAfterChange={this.handleScaleChange}
        />
        {/* nav bar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Palette;
