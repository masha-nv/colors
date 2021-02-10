import React, { Component } from "react";
import ColorBox from "./colorBox";
import "./Palette.css";

class Palette extends Component {
  state = {};
  render() {
    const colorBoxes = this.props.colors.map((box) => (
      <ColorBox background={box.color} name={box.name} />
    ));
    return (
      <div className="Palette">
        {/* nav bar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* footer goes here */}
      </div>
    );
  }
}

export default Palette;
