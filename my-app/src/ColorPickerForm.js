import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  render() {
    const {
      color,
      colorName,
      handleColorChange,
      handleAddColor,
      handleColorNameChange,
      classes,
      colors,
    } = this.props;
    return (
      <div>
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
    );
  }
}

export default ColorPickerForm;
