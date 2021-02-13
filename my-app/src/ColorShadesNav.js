import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = {
  root: { display: "flex", justifyContent: "space-between" },
  title: {
    backgroundColor: "#edeef2",
    margin: 0,
    height: "3rem",
    lineHeight: "100%",
    lineHeight: "2.5rem",
    color: "#303542",
    padding: " 5px 10px",
    letterSpacing: "0.1rem",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
  },
  select: {
    float: "right",
  },
};

class ColorShadesNav extends Component {
  state = { format: "hex", open: false };
  handleChange = (e) => {
    this.setState({ format: e.target.value, open: true });
    this.props.handleFormatChange(e.target.value);
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { shades, classes } = this.props;
    const { format, open } = this.state;
    return (
      <nav className={classes.root}>
        <Link className={classes.link} to="/">
          <h1 className={classes.title}>colorpicker</h1>
        </Link>
        <Select
          className={classes.select}
          onChange={this.handleChange}
          value={format}
        >
          <MenuItem value="hex">HEX-#FFFFFF</MenuItem>
          <MenuItem value="rgb">RGB-(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA-(255,255,255,1.0)</MenuItem>
        </Select>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={"Color Format Changed to " + format.toUpperCase()}
          action={
            <IconButton onClick={this.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        ></Snackbar>
      </nav>
    );
  }
}

export default withStyles(styles)(ColorShadesNav);
