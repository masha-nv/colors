import chroma from "chroma-js";
import sizes from "./sizes";
export default {
  root: {
    display: "inline-block",
    height: "25%",
    width: "20%",
    marginBottom: "0px",
    position: "relative",
    cursor: "pointer",
    "& span": {
      position: "absolute",
      bottom: 0,
      padding: "2px",
      paddingLeft: "4px",
      letterSpacing: "1px",
      color: (props) =>
        chroma(props.color).luminance() <= 0.3 ? "#ccc" : "#2a303a",
    },
    [sizes.down("lg")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("md")]: {
      width: "100%",
      height: "5%",
    },
  },
  icon: {
    padding: "2px",
    paddingRight: "4px",
    color: "#2a303a",
    position: "absolute",
    bottom: 0,
    right: 0,
    fontSize: "1.4rem",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      padding: 0,
    },
    transition: "all .3s ease-in-out ",
  },
};
