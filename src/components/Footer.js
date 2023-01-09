import React from "react";
import "./style.css";

const style = {
  pointer: {
    curser: "pointer",
    margin: "0px 20px 0px 20px",
  },
};

export default function Footer() {
  const links = [
    {
      link: "https://github.com/Landycodes",
      image: "./Assets/Footer/Github.png",
      label: "Github",
      size: {
        height: "40px",
        width: "auto",
        marginTop: "3px",
      },
      text: {
        marginTop: "-2px",
      },
    },
    {
      link: "https://www.linkedin.com/in/andrew-landry-75a65b244/",
      image: "./Assets/Footer/linkedIn.png",
      label: "LinkedIn",
      size: {
        height: "45px",
        width: "auto",
      },
      text: {
        marginTop: "-5px",
      },
    },
    {
      link: "https://www.instagram.com/heeyyybuddy/",
      image: "./Assets/Footer/insta.png",
      label: "Instagram",
      size: {
        height: "65px",
        width: "auto",
        marginTop: "-10px",
      },
      text: {
        marginTop: "-15px",
      },
    },
  ];

  return (
    <div className="bgColor">
      <footer className="footer text-white-50">
        <div className="container text-center d-flex justify-content-center align-items-center">
          {links.map((link) => (
            <a
              href={link.link}
              rel="noreferrer"
              target="_blank"
              className="text-decoration-none text-reset"
              style={style.pointer}
              key={link.label}
            >
              <img src={link.image} alt={link.label} style={link.size} />
              <div style={link.text}>{link.label}</div>
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
