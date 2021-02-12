import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import generatePalette from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import "./App.css";

class App extends Component {
  state = {};

  makePalettes = () => {
    let palettes = [];
    for (let palette of seedColors) {
      palettes.push(generatePalette(palette));
    }
    return palettes;
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList {...routeProps} palettes={this.makePalettes()} />
          )}
        />
        <Route
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              {...routeProps}
              palette={this.makePalettes().find(
                (palette) => palette.id === routeProps.match.params.id
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
