import React from "react";
import "./style.css";

const style = {
  w10: {
    width: "50%",
  },
};

export default function Header({ currentPage, changePage }) {
  return (
    <nav className="navbg d-flex justify-content-around align-items-center text-white text-nowrap">
      <h2 className="m-2">Andrew Landry</h2>
      <div></div>
      <ul
        className="menu list-unstyled d-flex justify-content-between m-0"
        style={style.w10}
      >
        <li className="m-2">
          <a
            href="#aboutme"
            onClick={() => changePage("AboutMe")}
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="m-2">
          <a
            href="#Portfolio"
            onClick={() => changePage("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="m-2">
          <a
            href="#Resume"
            onClick={() => changePage("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        <li className="m-2">
          <a
            href="#Contact"
            onClick={() => changePage("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
