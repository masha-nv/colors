import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./colorBox.css";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";

const styles = {
  ColorBox: {
    width: "20%",
    height: " 25%",
    display: "inline-block",
    position: "relative",
    marginTop: "-4px",
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
    const { background, name, moreLink } = this.props;
    const { copied } = this.state;
    const light = chroma(background).luminance() >= 0.5;
    return (
      <div className="ColorBox" style={{ background }}>
        <div
          className={`copy-overlay  ${copied && "show"}`}
          style={{ background }}
        />
        <div className={`copy-content ${copied && "show-copy-content"}`}>
          <h1 className={`copied ${light ? "light" : "dark"}`}>copied</h1>
          <p className={`copied-bg ${light ? "light" : "dark"}`}>
            {background}
          </p>
        </div>
        <div className="box-content">
          <div className="copy-container">
            <span className={`${light ? "light" : "dark"}`}>{name}</span>
            {name && (
              <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <button className={`copy-button ${light ? "light" : "dark"}`}>
                  Copy
                </button>
              </CopyToClipboard>
            )}
            {!name && (
              <button onClick={this.handleGoBack} className="goBack-button">
                go back
              </button>
            )}
          </div>
          {moreLink && (
            <span
              onClick={this.handleSeeMore}
              className={`see-more ${light ? "light" : "dark"}`}
            >
              More
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(ColorBox));
