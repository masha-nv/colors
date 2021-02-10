import React, { Component } from "react";
import "./colorBox.css";

class ColorBox extends Component {
  state = {};
  render() {
    return (
      <div className="ColorBox" style={{ background: this.props.background }}>
        <span>MORE</span>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default ColorBox;
