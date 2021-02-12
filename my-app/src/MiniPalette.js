import React, { Component } from "react";
import "./MiniPalette.css";

class MiniPalette extends Component {
  state = {};
  render() {
    const { palette } = this.props;
    return (
      <div className="MiniPalette">
        <div>
          <div className="container">
            {palette.colors[500].map((color) => (
              <div
                key={color.hex}
                className="miniBox"
                style={{ background: color.hex }}
              ></div>
            ))}
          </div>
          <h4>{palette.paletteName}</h4>
        </div>
      </div>
    );
  }
}

export default MiniPalette;
