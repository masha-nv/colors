import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import generatePalette from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import "./App.css";
import ColorShades from "./ColorShades";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component {
  savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  state = {
    palettes:
      this.savedPalettes ||
      window.localStorage.setItem("palettes", JSON.stringify(seedColors)),
  };

  handleDeletePalette = (e, palette) => {
    e.preventDefault();
    const updatedPalettes = this.state.palettes.filter(
      (p) => p.paletteName !== palette.paletteName
    );
    window.localStorage.setItem("palettes", JSON.stringify(updatedPalettes));
    this.setState({ palettes: updatedPalettes });
  };

  makePalettes = () => {
    let palettes = [];
    for (let palette of this.state.palettes) {
      palettes.push(generatePalette(palette));
    }
    return palettes;
  };

  findPalette = (id) => {
    return this.makePalettes().find((palette) => palette.id === id);
  };

  getShades = (colorName, palette) => {
    let shades = [];
    for (let color in palette.colors) {
      for (let shade of palette.colors[color]) {
        if (shade.name.substr(0, shade.name.indexOf(" ")) === colorName)
          shades.push(shade);
      }
    }
    shades.push({ hex: "#000000" });
    return shades.slice(1);
  };

  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm {...routeProps} palettes={palettes} />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList
              {...routeProps}
              palettes={this.makePalettes()}
              deletePalette={this.handleDeletePalette}
            />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              {...routeProps}
              palette={this.findPalette(routeProps.match.params.id)}
            />
          )}
        />
        <Route
          exact
          path="/palette/:id/:colorName"
          render={(routeProps) => (
            <ColorShades
              {...routeProps}
              shades={this.getShades(
                routeProps.match.params.colorName.substr(
                  0,
                  routeProps.match.params.colorName.indexOf(" ")
                ),
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
