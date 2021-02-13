import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class Navbar extends Component {
  state = { format: "hex", open: false };

  handleChange = (e) => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleFormatChange(e.target.value);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { format, open } = this.state;
    return (
      <div>
        <nav className="Navbar">
          <a href="/">
            <h3>colorpicker</h3>
          </a>
          <p>Level: {this.props.scale}</p>
          <Slider
            className="slider"
            min={100}
            max={900}
            step={100}
            defaultValue={this.props.scale}
            onAfterChange={this.props.handleScaleChange}
          />
          <Select
            className="select"
            value={format}
            onChange={this.handleChange}
          >
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - 255,255,255</MenuItem>
            <MenuItem value="rgba">RGBA - 255,255,255,1.0</MenuItem>
          </Select>
        </nav>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={`Changed format to ${format.toUpperCase()}`}
          action={
            <React.Fragment>
              <IconButton
                style={{ padding: "10px" }}
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    );
  }
}

export default Navbar;
