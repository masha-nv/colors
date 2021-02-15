import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/paletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Avatar from "@material-ui/core/Avatar";

class PaletteList extends Component {
  state = { openDeleteDialog: false, deletingId: "" };
  openDialog = (e, id) => {
    e.preventDefault();
    this.setState({ openDeleteDialog: true, deletingId: id });
  };
  closeDialog = () => {
    this.setState({ openDeleteDialog: false, deletingId: "" });
  };
  deletePaletteById = () => {
    this.setState({ openDeleteDialog: false }, () =>
      this.props.deletePalette(this.state.deletingId)
    );
  };
  render() {
    const { palettes, classes, deletePalette } = this.props;
    const { deletingId } = this.state;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <div className={classes.header}>
            <h1 className={classes.title}>React Colors</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </div>
          <TransitionGroup className={classes.paletteList}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} timeout={500} classNames="fade">
                <Link key={palette.id} to={"/palette/" + palette.id}>
                  <MiniPalette
                    palette={palette}
                    // deletePalette={deletePalette}
                    openDialog={this.openDialog}
                  />
                </Link>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          onClose={this.closeDialog}
          open={this.state.openDeleteDialog}
          fullWidth={true}
          aria-labeledby="delete-dialog-title"
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.deletePaletteById}>
              <ListItemAvatar>
                <Avatar className={classes.avatarCheck}>
                  <Check />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar className={classes.avatarClose}>
                  <Close />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PaletteList);
