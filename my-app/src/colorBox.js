import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./colorBox.css";

class ColorBox extends Component {
  state = { copied: false };
  handleCopy = () => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1500);
  };
  render() {
    const { background, name } = this.props;
    const { copied } = this.state;

    return (
      <div className="ColorBox" style={{ background }}>
        <div
          className={`copy-overlay  ${copied && "show"}`}
          style={{ background }}
        />
        <div className={`copy-content ${copied && "show-copy-content"}`}>
          <h1 className="copied">copied</h1>
          <p className="copied-bg">{background}</p>
        </div>
        <div className="box-content">
          <div className="copy-container">
            <span>{name}</span>
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
              <button className="copy-button">Copy</button>
            </CopyToClipboard>
          </div>
          <span className="see-more">More</span>
        </div>
      </div>
    );
  }
}

export default ColorBox;
