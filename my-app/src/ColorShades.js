import React, { Component } from "react";
import ColorShadesNav from "./ColorShadesNav";
import ColorBox from "./colorBox";
import { withStyles } from "@material-ui/styles";
import Footer from "./Footer";

const styles = {
  goBack: {
    position: "absolute",
    top: "20%",
    zIndex: 10,
  },
  palette: {
    height: "100vh",
  },
};

class ColorShades extends Component {
  state = { format: "hex", copied: false, copiedColor: "" };

  handleCopy = (color) => {
    this.setState({ copied: true, copiedColor: color });
    setTimeout(() => {
      this.setState({ copied: false, copiedColor: "" });
    }, 1600);
  };

  handleFormatChange = (format) => {
    this.setState({ format });
  };

  render() {
    const { shades, classes } = this.props;
    const colorBoxes = shades.map((shade) => (
      <ColorBox
        key={shade.hex}
        name={shade.name}
        background={shade[this.state.format]}
      />
    ));

    return (
      <div>
        <ColorShadesNav
          shades={shades}
          handleFormatChange={this.handleFormatChange}
        />
        <div className="ShadesPalette Palette">
          <div className="Palette-colors">{colorBoxes}</div>
        </div>
        <Footer name={shades[0].id.toUpperCase()} />
      </div>
    );
  }
}

export default withStyles(styles)(ColorShades);
