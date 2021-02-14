import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";

const NewPaletteFormNav = ({
  classes,
  goBack,
  handleDrawerOpen,
  open,
  handleSavePalette,
}) => {
  return (
    <AppBar
      color="default"
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar disableGutters={!open}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Create a Palette
        </Typography>

        <Button
          onClick={handleSavePalette}
          variant="contained"
          color="primary"
          style={{ marginLeft: "auto", marginRight: "2%" }}
        >
          Save Palette
        </Button>
        <Button
          onClick={goBack}
          variant="contained"
          color="secondary"
          style={{ float: "right", marginRight: "2%" }}
        >
          Go Back
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NewPaletteFormNav;
