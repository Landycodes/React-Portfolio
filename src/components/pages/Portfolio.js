import React from "react";

const style = {
  box: {
    width: "80vw",
  },
  resize: {
    height: "150px",
    width: "250px",
  },
};

export default function Portfolio() {
  //insert following object keys with project values to add new project
  const tiles = [
    {
      id: "weather",
      image: "./Assets/Portfolio/weather.png",
      title: "Weather App",
      app: "https://landycodes.github.io/Weather-Display/",
      git: "https://github.com/Landycodes/Weather-Display",
    },
    {
      id: "drink",
      image: "./Assets/Portfolio/drink.png",
      title: "Drink",
      app: "https://mrgreen12375.github.io/drink/",
      git: "https://github.com/Landycodes/drink",
    },
    {
      id: "web",
      image: "./Assets/Portfolio/weblicater.png",
      title: "WEBlicater",
      app: "https://weblicater.herokuapp.com/",
      git: "https://github.com/Landycodes/WEBlicater",
    },
    {
      id: "pass",
      image: "./Assets/Portfolio/passgen.png",
      title: "Password Generator",
      app: "https://landycodes.github.io/Password-Generator/",
      git: "https://github.com/Landycodes/Password-Generator",
    },
    {
      id: "plan",
      image: "./Assets/Portfolio/planner.png",
      title: "Day Planner",
      app: "https://landycodes.github.io/Work-Day-Planner/",
      git: "https://github.com/Landycodes/Work-Day-Planner",
    },
    {
      id: "quiz",
      image: "./Assets/Portfolio/quiz.png",
      title: "J.S Quiz",
      app: "https://landycodes.github.io/JS-Trivia-Quiz/index.html",
      git: "https://github.com/Landycodes/JS-Trivia-Quiz",
    },
  ];
  //Project creates the card template
  const Project = (tiles) => {
    return (
      // card container
      <div
        id={tiles.id}
        className="pointer contentbg rounded overflow-hidden d-flex flex-column align-items-center shadow m-3"
        onClick={(event) => {
          event.stopPropagation();
          const popup = document.getElementsByClassName(`${tiles.id}`);
          for (let i = 0; i < popup.length; i++) {
            popup[i].classList.remove("hideMe");
          }
          document
            .getElementById(`${tiles.id}`)
            .addEventListener("mouseleave", function () {
              for (let i = 0; i < popup.length; i++) {
                popup[i].classList.add("hideMe");
              }
            });
        }}
      >
        {/* link popup */}
        <div className={`cover d-flex flex-column hideMe ${tiles.id}`}>
          <a
            href={tiles.app}
            className={`view text-white text-decoration-none text-center hideMe ${tiles.id}`}
            target="_blank"
            rel="noreferrer"
          >
            <h3>view app 🚀</h3>
          </a>
          <hr className={`hr hideMe ${tiles.id}`} />
          <a
            href={tiles.git}
            className={`view text-white text-decoration-none text-center hideMe ${tiles.id}`}
            target="_blank"
            rel="noreferrer"
          >
            <h3>Github repo 📁</h3>
          </a>
        </div>
        {/* card image and name */}
        <img src={tiles.image} alt={tiles.title} style={style.resize} />
        <h4 className="text-center m-0 p-1">{tiles.title}</h4>
      </div>
    );
  };
  // container for projects
  return (
    <div className="bgColor d-flex justify-content-center">
      <div
        className="d-flex justify-content-center flex-wrap mt-4"
        style={style.box}
      >
        {/* display cards */}
        {tiles.map((tile) => Project(tile))}
      </div>
    </div>
  );
}
