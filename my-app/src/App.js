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
  state = {};

  makePalettes = () => {
    let palettes = [];
    for (let palette of seedColors) {
      palettes.push(generatePalette(palette));
    }
    return palettes;
  };

  findPalette = (id) => {
    return this.makePalettes().find((palette) => palette.id === id);
  };

  getShades = (colorName, palette) => {
    let shades = [];
    // let palette = this.findPalette(id);
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
    return (
      <Switch>
        <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList {...routeProps} palettes={this.makePalettes()} />
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
