import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";

//links and assistive style for footer elements
const links = [
  {
    link: "https://github.com/Landycodes",
    image: "./Assets/Github.png",
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
    image: "./Assets/linkedIn.png",
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
    image: "./Assets/insta.png",
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

export default function App() {
  return (
    <div>
      <Content />
      <Footer links={links} />
    </div>
  );
}
