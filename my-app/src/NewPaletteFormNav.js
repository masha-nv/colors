import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";
import { StylesProvider } from "@material-ui/core/styles";
import "./styles/NewPaletteFormNav.css";

const NewPaletteFormNav = ({
  classes,
  goBack,
  handleDrawerOpen,
  open,
  handleSavePalette,
}) => {
  return (
    <StylesProvider injectFirst>
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
          <div className={classes.navButtons}>
            <Button
              onClick={handleSavePalette}
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Save Palette
            </Button>
            <Button onClick={goBack} variant="contained" color="secondary">
              Go Back
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </StylesProvider>
  );
};

export default NewPaletteFormNav;
