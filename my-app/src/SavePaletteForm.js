import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import seedColors from "./seedColors";

class SavePaletteForm extends Component {
  state = { paletteName: "" };

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      seedColors.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleSubmit = () => {
    this.props.handleSave(this.state.paletteName);
  };

  handleChange = (e) => {
    this.setState({ paletteName: e.target.value });
  };

  render() {
    const { open, handleClose } = this.props;
    const { paletteName } = this.state;

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
          <DialogContent>
            <ValidatorForm onSubmit={this.handleSubmit}>
              <TextValidator
                onChange={this.handleChange}
                autoFocus
                margin="dense"
                value={paletteName}
                label="Palette Name"
                fullWidth
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Palette Name is Required",
                  "Palette with this Name already exists",
                ]}
              />
              <Button type="submit" color="primary">
                Save
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </ValidatorForm>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SavePaletteForm;
