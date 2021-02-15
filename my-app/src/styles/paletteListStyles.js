import sizes from "./sizes";

export default {
  "@global": {
    ".fade-exit-active": {
      opacity: "0",
      transition: "opacity .5s ease-in-out",
    },
  },
  root: {
    height: "100vh",
    "& h1": {
      color: "#2a313a",
      marginLeft: "10%",
      letterSpacing: "0.2rem",
      paddingLeft: "15px",
      [sizes.down("md")]: {
        fontSize: "1rem",
        letterSpacing: "1px",
      },
    },
    "& a": {
      textDecoration: "none",
      color: "#303542",
      [sizes.down("md")]: {
        fontSize: ".8rem",
        letterSpacing: "1px",
        textAlign: "right",
      },
    },
  },
  paletteList: {
    display: "grid",
    width: "80%",
    gridTemplateColumns: "repeat(3, 1fr)",
    [sizes.down("lg")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    gridGap: "2px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    "& a": {
      color: "#2a313a",
      marginRight: "12.2%",
      letterSpacing: "0.1rem",
      paddingLeft: "15px",
      alignSelf: "center",
    },
  },
};
