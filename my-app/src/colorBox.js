import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/colorBoxStyles";

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
    return (
      <div className={classes.ColorBox} style={{ background }}>
        <div
          className={`${classes.copyOverlay}  ${copied && classes.showOverlay}`}
          style={{ background }}
        />
        <div
          className={`${classes.copyContent} ${
            copied && classes.showCopyContent
          }`}
        >
          <h1>copied</h1>
          <p>{background}</p>
        </div>
        <div>
          <div>
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
