import chroma from "chroma-js";

export default {
  ColorBox: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    position: "relative",
    marginTop: "-4px",
    ["@media (min-width: 1201px)"]: {
      height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    },
    ["@media (max-width:1200px)"]: {
      width: "50%",
    },
    ["@media (max-width:667px)"]: {
      width: "100%",
    },
    "&:hover button": {
      opacity: 1,
    },
    "& button": {
      position: "absolute",
      top: "50%",
      left: "50%",
      border: "none",
      height: "32px",
      marginTop: "-16px",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      outline: "none",
      textTransform: "uppercase",
      letterSpacing: "0.1rem",
      cursor: "pointer",
      color: (props) =>
        chroma(props.background).luminance() >= 0.3
          ? chroma("black").alpha(0.9)
          : "white",
    },
    "& span": {
      position: "absolute",
      bottom: 0,
      padding: "10px",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.3
        ? chroma("black").alpha(0.9)
        : "white",
  },
  copyContent: {
    position: "fixed",
    zIndex: "-10",
    width: "800px",
    height: "300px",
    textAlign: "center",
    top: " 50%",
    left: " 50%",
    marginTop: "-250px",
    marginLeft: "-400px",
    color: (props) =>
      chroma(props.background).luminance() >= 0.3
        ? chroma("black").alpha(0.9)
        : "white",
    marginBottom: "0",
    transform: "scale(0)",
    opacity: "0",
    "& h1": {
      fontSize: "3rem",
      letterSpacing: "1rem",
      fontWeight: "400",
      textShadow: "1px 2px grey",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      marginBottom: "0",
      padding: "10px",
      borderRadius: "10px",
      textTransform: "uppercase",
    },
    "& p": {
      fontSize: "1.2rem",
      fontWeight: "100",
      letterSpacing: "0.1rem",
    },
  },
  seeMore: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    border: "none",
    outline: "none",
    textTransform: "uppercase",
    cursor: "pointer",
    color: (props) =>
      chroma(props.background).luminance() >= 0.3
        ? chroma("black").alpha(0.9)
        : "white",
  },
  copyBtn: {
    opacity: 0,
    transition: "all .5s",
    width: "54px",
    marginLeft: "-27px",
  },
  goBackBtn: {
    width: "100px",
    marginLeft: "-50px",
  },
  copyOverlay: {
    width: "100%",
    height: "100%",
    zIndex: "0",
    opacity: "0",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    position: "absolute",
    zIndex: "10",
    opacity: "1",
    transform: "scale(10)",
  },
  showCopyContent: {
    opacity: "1",
    zIndex: "11",
    transform: "scale(1)",
    transition: "all 0.3s ease-in-out",
    transitionDelay: "0.6s",
  },
};
