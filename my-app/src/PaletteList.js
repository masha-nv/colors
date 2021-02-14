import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteListStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

class PaletteList extends Component {
  state = { open: false };

  openDeleteDialog = (e, palette) => {
    e.preventDefault();
    this.setState({ open: true });
  };

  handleDeletePalette = (palette) => {
    this.props.deletePalette(palette);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { palettes, classes } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Palette?"}</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleDeletePalette}
              color="secondary"
              autoFocus
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        <div className={classes.root}>
          <div className={classes.header}>
            <h1 className={classes.title}>React Colors</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </div>
          <div className={classes.paletteList}>
            {palettes.map((palette) => (
              <Link key={palette.id} to={"/palette/" + palette.id}>
                <div>
                  <MiniPalette
                    palette={palette}
                    openDeleteDialog={this.openDeleteDialog}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PaletteList);
