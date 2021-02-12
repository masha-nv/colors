import React, { Component } from "react";
import "./PaletteList.css";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  state = {};
  render() {
    const { palettes } = this.props;
    return (
      <div className="spot">
        <h1>React Colors</h1>
        <div className="PaletteList">
          {palettes.map((palette) => (
            <Link key={palette.id} to={"/palette/" + palette.id}>
              <div>
                <MiniPalette palette={palette} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default PaletteList;
