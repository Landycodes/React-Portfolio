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

const tiles = {
  weather: {
    id: "weather",
    image: "./assets/portfolio/weather.png",
    title: "Weather App",
    app: "https://landycodes.github.io/Weather-Display/",
    git: "https://github.com/Landycodes/Weather-Display",
  },
  drink: {
    id: "drink",
    image: "./assets/portfolio/drink.png",
    title: "Drink",
    app: "https://mrgreen12375.github.io/drink/",
    git: "https://github.com/Landycodes/drink",
  },
  weblicater: {
    id: "web",
    image: "./assets/portfolio/weblicater.png",
    title: "WEBlicater",
    app: "https://weblicater.herokuapp.com/",
    git: "https://github.com/Landycodes/WEBlicater",
  },
  passGen: {
    id: "pass",
    image: "./assets/portfolio/passgen.png",
    title: "Password Generator",
    app: "https://landycodes.github.io/Password-Generator/",
    git: "https://github.com/Landycodes/Password-Generator",
  },
  planner: {
    id: "plan",
    image: "./assets/portfolio/planner.png",
    title: "Day Planner",
    app: "https://landycodes.github.io/Work-Day-Planner/",
    git: "https://github.com/Landycodes/Work-Day-Planner",
  },
  jsQuiz: {
    id: "quiz",
    image: "./assets/portfolio/quiz.png",
    title: "J.S Quiz",
    app: "https://landycodes.github.io/JS-Trivia-Quiz/index.html",
    git: "https://github.com/Landycodes/JS-Trivia-Quiz",
  },
};
const { weather, drink, weblicater, passGen, planner, jsQuiz } = tiles;

export default function Portfolio() {
  //cover card when clicked
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
        {Project(weather)}
        {Project(drink)}
        {Project(weblicater)}
        {Project(passGen)}
        {Project(planner)}
        {Project(jsQuiz)}
      </div>
    </div>
  );
}
//Application has a single Project component
//that’s used multiple times in the Portfolio section.
