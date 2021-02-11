import React from "react";
import "./Footer.css";

const Footer = ({ name }) => {
  console.log(name);
  return (
    <footer className="footer">
      <p>{name}</p>
    </footer>
  );
};

export default Footer;
