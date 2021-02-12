import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ColorShadesNav from "./ColorShadesNav";
import "./ColorShades.css";

const styles = {
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    ["@media(max-width: 950px)"]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    ["@media(max-width: 750px)"]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    height: "80vh",
  },
  box: {
    height: "100%",
    position: "relative",
  },
  copy: {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "50px",
    width: "90px",
    marginTop: "-25px",
    marginLeft: "-45px",
    lineHeight: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    backgroundColor: "rgba(255, 255, 255, .3)",
    border: "none",
    outline: "none",
    color: "#fff",
    cursor: "pointer",
    letterSpacing: ".1rem",
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
  overlay: {
    display: "absolute",
  },
  showOverlay: {
    width: "100vw",
    height: "100vh",
    transition: "all 0.3s ease-in-out",
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
    const { classes, shades } = this.props;
    const { copiedColor, copied, format } = this.state;

    return (
      <React.Fragment>
        <ColorShadesNav
          shades={shades}
          handleFormatChange={this.handleFormatChange}
        />
        <div className={classes.root}>
          <div
            style={{ backgroundColor: copiedColor }}
            className={classes.overlay && copied ? classes.showOverlay : null}
          ></div>
          {shades.map((shade) => (
            <div className={classes.boxContainer}>
              <div
                className={classes.box}
                key={shade.hex}
                style={{ background: shade.hex }}
              >
                <CopyToClipboard
                  key={shade.hex}
                  text={shade[format]}
                  onCopy={() => this.handleCopy(shade.hex)}
                >
                  <button className={classes.copy}>copy</button>
                </CopyToClipboard>
                <span>{shade.name}</span>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ColorShades);
