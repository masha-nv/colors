import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Drawer from "@material-ui/core/Drawer";
import ColorPickerForm from "./ColorPickerForm";

const NewPaletteDrawer = ({
  classes,
  handleDrawerClose,
  handleClearPalette,
  generateRandomColor,
  open,
  colors,
  color,
  colorName,
  handleColorChange,
  handleAddColor,
  handleColorNameChange,
}) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.drawerContent}>
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button
            onClick={handleClearPalette}
            variant="contained"
            color="secondary"
          >
            Clear Palette
          </Button>
          <Button
            disabled={colors.length >= 20}
            onClick={generateRandomColor}
            variant="contained"
            color="primary"
          >
            Random Color
          </Button>
        </div>
        <ColorPickerForm
          classes={classes}
          colors={colors}
          color={color}
          colorName={colorName}
          handleColorChange={handleColorChange}
          handleAddColor={handleAddColor}
          handleColorNameChange={handleColorNameChange}
        />
      </div>
    </Drawer>
  );
};

export default NewPaletteDrawer;
