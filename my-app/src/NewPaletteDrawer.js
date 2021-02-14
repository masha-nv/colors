import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import Drawer from "@material-ui/core/Drawer";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

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
        <div className={classes.colorPicker}>
          <ChromePicker
            width="310px"
            color={color}
            onChangeComplete={handleColorChange}
          />
        </div>
        <ValidatorForm onSubmit={handleAddColor}>
          <TextValidator
            validators={["required", "isNameUnique", "isHexUnique"]}
            errorMessages={[
              "Color Name is Required",
              "Color Name Should Be Unique",
              "Color already added",
            ]}
            label="Color Name"
            value={colorName}
            onChange={handleColorNameChange}
          />
          <Button
            disabled={colors.length >= 20}
            type="submit"
            variant="contained"
            style={{
              backgroundColor: colors.length >= 20 || color,
              marginTop: "10px",
            }}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </div>
    </Drawer>
  );
};

export default NewPaletteDrawer;
