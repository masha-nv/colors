import React, { Component } from "react";
import "./PaletteList.css";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  state = {};
  render() {
    const { palettes } = this.props;
    return (
      <ul>
        {palettes.map((palette) => (
          <Link to={"/palette/" + palette.id}>
            <li>{palette.paletteName}</li>
          </Link>
        ))}
      </ul>
    );
  }
}

export default PaletteList;
