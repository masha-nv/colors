export default {
  root: {
    border: "15px solid white",
    borderRadius: "12px",
    margin: "0 9px 9px 0",
    background: "white",
    position: "relative",
    "& svg": {
      position: "absolute",
      right: "0",
      padding: "4px",
      opacity: 0,
      color: "#fff",
      transition: "all .3s ease",
    },
    "&:hover svg": {
      opacity: 1,
    },
    "& svg:hover": {
      transform: "scale(1.2)",
    },
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "1px",
    height: "200px",
  },
  miniBox: {
    height: "100%",
    "&:nth-child(1)": {
      borderRadius: "12px 0 0 0",
    },
    "&:nth-child(5)": {
      borderRadius: "0 12px 0 0",
    },
    "&:nth-child(16)": {
      borderRadius: "0 0 0 12px",
    },
    "&:nth-child(20)": {
      borderRadius: "0 0 12px 0",
    },
  },
  paletteName: {
    textAlign: "left",
    marginTop: 0,
    marginBottom: 0,
    letterSpacing: "0.02rem",
    padding: "7px",
  },
};
