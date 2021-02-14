import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import chroma from "chroma-js";
import SavePaletteForm from "./SavePaletteForm";
import seedColors from "./seedColors";
// import { arrayMove } from "react-sortable-hoc";
import DraggableColorList from "./DraggableColorList";
import arrayMove from "array-move";

const drawerWidth = 340;
const appBarHeight = 64;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: `calc(100vh - ${appBarHeight}px )`,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    height: "90vh",
  },
});

class NewPaletteForm extends Component {
  state = {
    open: false,
    color: "",
    colors: [],
    colorName: "",
    openDialog: false,
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  componentDidMount() {
    this.setState({ colors: seedColors[5].colors });
    ValidatorForm.addValidationRule("isNameUnique", () => {
      return this.state.colors.every(
        ({ name }) => name.toLowerCase() !== this.state.colorName.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isHexUnique", () => {
      return this.state.colors.every(
        ({ background }) => background !== this.state.color
      );
    });
  }

  handleAddColor = () => {
    this.setState({
      colors: [
        ...this.state.colors,
        { color: this.state.color, name: this.state.colorName },
      ],
      colorName: "",
      color: chroma.random().hex(),
    });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleColorChange = (color) => {
    this.setState({ color: color.hex });
  };

  handleColorNameChange = (e) => {
    this.setState({ colorName: e.target.value });
  };

  handleSavePalette = () => {
    this.setState({ openDialog: true });
  };

  handleClearPalette = () => {
    const colors = [];
    this.setState({ colors });
  };

  handleSave = (newPaletteName) => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replaceAll(" ", "-"),
      emoji: ":)",
      colors: this.state.colors,
    };
    seedColors.push(newPalette);
    this.setState({ openDialog: false });
    this.props.history.push("/");
  };

  handleClose = () => {
    this.setState({ openDialog: false });
  };
  generateRandomColor = () => {
    const randIdx = Math.floor(Math.random() * seedColors.length);
    const randomPalette = seedColors[randIdx];
    const randColorIdx = Math.floor(
      Math.random() * randomPalette.colors.length
    );
    let randomColor = randomPalette.colors[randColorIdx];

    this.setState({ colors: [...this.state.colors, randomColor] });
  };

  handleDelete = (color) => {
    console.log(color);
    this.setState({
      colors: [...this.state.colors.filter((el) => el.color !== color)],
    });
  };

  render() {
    const { classes } = this.props;
    const { open, color, colors, colorName } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
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
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create a Palette
            </Typography>
            <Button
              onClick={this.handleSavePalette}
              variant="contained"
              color="primary"
              style={{ marginLeft: "auto", marginRight: "2%" }}
            >
              Save Palette
            </Button>
          </Toolbar>
        </AppBar>
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
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design Your Palette</Typography>
          <div>
            <Button
              onClick={this.handleClearPalette}
              variant="contained"
              color="secondary"
            >
              Clear Palette
            </Button>
            <Button
              disabled={colors.length >= 20}
              onClick={this.generateRandomColor}
              variant="contained"
              color="primary"
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={color}
            onChangeComplete={this.handleColorChange}
          />
          <ValidatorForm onSubmit={this.handleAddColor}>
            <TextValidator
              validators={["required", "isNameUnique", "isHexUnique"]}
              errorMessages={[
                "Color Name is Required",
                "Color Name Should Be Unique",
                "Color already added",
              ]}
              label="Color Name"
              value={colorName}
              onChange={this.handleColorNameChange}
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
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <SavePaletteForm
            handleSave={this.handleSave}
            open={this.state.openDialog}
            handleClose={this.handleClose}
          />
          <DraggableColorList
            distance={1}
            axis="xy"
            onSortEnd={this.onSortEnd}
            colors={colors}
            handleDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
