import React from "react";
import "./style.css";

const style = {
  pointer: {
    curser: "pointer",
    margin: "0px 20px 0px 20px",
  },
};

export default function Footer({ links }) {
  return (
    <footer className="footer fixed-bottom text-white-50">
      <div className="container text-center d-flex justify-content-center align-items-center">
        {links.map((link) => (
          <a
            href={link.link}
            rel="noreferrer"
            target="_blank"
            className="text-decoration-none text-reset"
            style={style.pointer}
          >
            <img src={link.image} alt={link.label} style={link.size} />
            <div style={link.text}>{link.label}</div>
          </a>
        ))}
      </div>
    </footer>
  );
}
