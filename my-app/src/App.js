import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import generatePalette from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import "./App.css";
import ColorShades from "./ColorShades";
import NewPaletteForm from "./NewPaletteForm";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  state = {
    palettes:
      this.savedPalettes ||
      window.localStorage.setItem("palettes", JSON.stringify(seedColors)),
  };

  handleDeletePalette = (id) => {
    console.log("deleting", id);
    // e.preventDefault();
    const updatedPalettes = this.state.palettes.filter((p) => p.id !== id);
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
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition timeout={500} key={location.key} classNames="fade">
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={(routeProps) => (
                    <div className="page">
                      <NewPaletteForm {...routeProps} palettes={palettes} />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <div className="page">
                      <PaletteList
                        {...routeProps}
                        palettes={this.makePalettes()}
                        deletePalette={this.handleDeletePalette}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) => (
                    <div className="page">
                      <Palette
                        {...routeProps}
                        palette={this.findPalette(routeProps.match.params.id)}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id/:colorName"
                  render={(routeProps) => (
                    <div className="page">
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
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
