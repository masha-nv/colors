import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./colorBox.css";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";

const styles = {
  ColorBox: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    position: "relative",
    marginTop: "-4px",
    ["@media (min-width: 1201px)"]: {
      height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    },
    ["@media (max-width:1200px)"]: {
      width: "50%",
    },
    ["@media (max-width:667px)"]: {
      width: "100%",
    },
    "&:hover button": {
      opacity: 1,
    },
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.3
        ? chroma("black").alpha(0.9)
        : "white",
  },
  copyContent: {
    position: "fixed",
    zIndex: "-10",
    width: "800px",
    height: "300px",
    textAlign: "center",
    top: " 50%",
    left: " 50%",
    marginTop: "-250px",
    marginLeft: "-400px",
    color: (props) =>
      chroma(props.background).luminance() >= 0.3
        ? chroma("black").alpha(0.9)
        : "white",
    marginBottom: "0",
    transform: "scale(0)",
    opacity: "0",
  },
  dynamicFontColor: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.3
        ? chroma("black").alpha(0.9)
        : "white",
  },
  seeMore: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "none",
    outline: "none",
    textTransform: "uppercase",
    cursor: "pointer",
    color: (props) =>
      chroma(props.background).luminance() >= 0.3
        ? chroma("black").alpha(0.9)
        : "white",
  },
  button: {
    position: "absolute",
    top: "50%",
    left: "50%",
    border: "none",
    width: "54px",
    height: "32px",
    marginTop: "-16px",
    marginLeft: "-27px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    outline: "none",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    cursor: "pointer",
  },
  copyBtn: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.3
        ? chroma("black").alpha(0.9)
        : "white",
    opacity: 0,
    transition: "all .5s",
  },
  goBackBtn: {
    width: "100px",
    marginLeft: "-50px",
  },
};

class ColorBox extends Component {
  state = { copied: false };
  handleCopy = () => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1500);
  };

  handleSeeMore = (e) => {
    e.stopPropagation();
    this.props.history.push(
      `/palette/${this.props.match.params.id}/${this.props.name}`
    );
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { background, name, moreLink, classes } = this.props;
    const { copied } = this.state;
    const light = chroma(background).luminance() >= 0.5;
    return (
      <div className={classes.ColorBox} style={{ background }}>
        <div
          className={`copy-overlay  ${copied && "show"}`}
          style={{ background }}
        />
        <div className={`copy-content ${copied && "show-copy-content"}`}>
          <h1 className={classes.dynamicFontColor}>copied</h1>
          <p className={classes.dynamicFontColor}>{background}</p>
        </div>
        <div className="box-content">
          <div className="copy-container">
            <span className={classes.colorName}>{name}</span>
            {name && (
              <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <button className={classes.copyBtn}>Copy</button>
              </CopyToClipboard>
            )}
            {!name && (
              <button onClick={this.handleGoBack} className={classes.goBackBtn}>
                go back
              </button>
            )}
          </div>
          {moreLink && (
            <span onClick={this.handleSeeMore} className={classes.seeMore}>
              More
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(ColorBox));
