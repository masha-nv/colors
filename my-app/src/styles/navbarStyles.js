import sizes from "./sizes";

export default {
  root: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    "& a": {
      textDecoration: "none",
      [sizes.down("md")]: {
        display: "none",
      },
    },
    [sizes.down("md")]: {
      flexDirection: "column",
    },

    "& h3": {
      backgroundColor: "#edeef2",
      margin: "0",
      height: "3rem",
      lineHeight: "4.1rem",
      color: "#303542",
      padding: "5px 10px",
      letterSpacing: "0.1rem",
      height: "74.67px",
    },

    "& p": {
      padding: "0 10px 0 10px",
      fontWeight: "normal",
    },
  },
  slider: {
    width: "30%",
    "& .rc-slider-track": {
      backgroundColor: "inherit",
    },
    [sizes.down("md")]: {
      width: "90%",
    },
    "& .rc-slider-handle": {
      background: "#32a623",
      width: "20px",
      height: "20px",
      marginTop: "-6.5px",
    },
    "& .rc-slider-rail": {
      height: "7px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
    [sizes.down("md")]: {
      margin: "20px auto",
    },
  },
};
