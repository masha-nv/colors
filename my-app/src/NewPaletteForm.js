import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import chroma from "chroma-js";
import SavePaletteForm from "./SavePaletteForm";
import seedColors from "./seedColors";
import DraggableColorList from "./DraggableColorList";
import arrayMove from "array-move";
import NewPaletteFormNav from "./NewPaletteFormNav";
import NewPaletteDrawer from "./NewPaletteDrawer";
import EmojiForm from "./EmojiForm";

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

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContent: {
    height: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& h4": {
      marginBottom: "30px",
    },
    "& button": {
      margin: "0 4px 10px 0",
    },
    "& form": {
      width: "310px",
      "& input": {
        width: "310px",
      },
      "& button": {
        width: "100%",
        height: "3rem",
      },
    },
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
    openEmojiForm: false,
    paletteName: "",
  };

  handleCloseEmojiForm = () => {
    this.setState({ openEmojiForm: false });
  };

  handleSaveEmoji = (emoji) => {
    const newPalette = {
      paletteName: this.state.paletteName,
      id: this.state.paletteName.toLowerCase().replaceAll(" ", "-"),
      emoji: emoji,
      colors: this.state.colors,
    };
    seedColors.push(newPalette);
    this.setState({ openDialog: false, openEmojiForm: false });
    this.props.history.push("/");
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  componentDidMount() {
    this.setState({ colors: seedColors[0].colors });
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
    this.setState({ openDialog: true, openEmojiForm: false });
  };

  handleClearPalette = () => {
    const colors = [];
    this.setState({ colors });
  };

  handleSave = (newPaletteName) => {
    this.setState({
      openEmojiForm: true,
      paletteName: newPaletteName,
      openDialog: false,
    });
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
    this.setState({
      colors: [...this.state.colors.filter((el) => el.color !== color)],
    });
  };

  render() {
    const { classes, history } = this.props;
    const { open, color, colors, colorName, openEmojiForm } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <NewPaletteFormNav
          handleSavePalette={this.handleSavePalette}
          open={open}
          classes={classes}
          handleDrawerOpen={this.handleDrawerOpen}
          goBack={() => history.push("/")}
        />
        <NewPaletteDrawer
          generateRandomColor={this.generateRandomColor}
          handleDrawerClose={this.handleDrawerClose}
          handleClearPalette={this.handleClearPalette}
          classes={classes}
          open={open}
          colors={colors}
          color={color}
          colorName={colorName}
          handleColorChange={this.handleColorChange}
          handleAddColor={this.handleAddColor}
          handleColorNameChange={this.handleColorNameChange}
        />
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
          <EmojiForm
            closeEmojiForm={this.handleCloseEmojiForm}
            saveEmoji={this.handleSaveEmoji}
            open={openEmojiForm}
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
