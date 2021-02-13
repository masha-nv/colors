import chroma, { rgb } from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10);

    for (let i = 0; i < scale.length; i++) {
      newPalette.colors[levels[i]].push({
        hex: scale[i],
        name: `${color.name} ${levels[i]}`,
        id: `${color.name.toLowerCase().replaceAll(" ", "-")}`,
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }

  return newPalette;
}

function generateScale(hexColor, numberOfSteps) {
  return chroma
    .scale(["white", hexColor, chroma(hexColor).darken(1.3)])
    .colors(numberOfSteps);
}

export default generatePalette;
