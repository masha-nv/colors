import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="Navbar">
        <h3>colorpicker</h3>
        <p>Level: {this.props.scale}</p>
        <Slider
          className="slider"
          min={100}
          max={900}
          step={100}
          defaultValue={this.props.scale}
          onAfterChange={this.props.handleScaleChange}
        />
      </nav>
    );
  }
}

export default Navbar;
