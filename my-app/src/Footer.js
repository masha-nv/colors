import React from "react";
import "./Footer.css";

const Footer = ({ name }) => {
  return (
    <footer className="footer">
      <p>{name}</p>
    </footer>
  );
};

export default Footer;
