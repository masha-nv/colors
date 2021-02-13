export default {
  root: {
    height: "100vh",
  },
  paletteList: {
    display: "grid",
    height: "700px",
    width: "80%",
    gridTemplateColumns: "repeat(3, 1fr)",
    ["@media (max-width: 950px)"]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    ["@media (max-width: 750px)"]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    gridGap: "2px",
    margin: "0 auto",
  },
  anchor: {
    textDecoration: "none",
    color: "#303542",
  },
  title: {
    color: "#2a313a",
    marginLeft: "10%",
    letterSpacing: "0.2rem",
    paddingLeft: "15px",
  },
};
