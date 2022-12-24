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
  return (
    <div className="bgColor d-flex justify-content-center">
      <div
        className="d-flex justify-content-center flex-wrap mt-4"
        style={style.box}
      >
        {/* Card 1 */}
        <div className="contentbg rounded overflow-hidden shadow cursor-pointer m-3">
          <img
            src="./assets/portfolio/weather.png"
            alt="weather app"
            style={style.resize}
          />
          <h4 className="text-center m-0 p-1">Weather App</h4>
        </div>
        {/* Card 2 */}
        <div className="contentbg rounded w-56 overflow-hidden shadow-lg cursor-pointer m-3">
          <img
            src="./assets/portfolio/drink.png"
            alt="drink"
            style={style.resize}
          />
          <h4 className="text-center m-0 p-1">Drink</h4>
        </div>
        {/* Card 3 */}
        <div className="contentbg rounded w-56 overflow-hidden shadow-lg cursor-pointer m-3">
          <img
            src="./assets/portfolio/weblicater.png"
            alt="weblicater"
            style={style.resize}
          />
          <h4 className="text-center m-0 p-1">Weblicater</h4>
        </div>
        {/* Card 4 */}
        <div className="contentbg rounded w-56 overflow-hidden shadow-lg cursor-pointer m-3">
          <img
            src="./assets/portfolio/passgen.png"
            alt="password generator"
            style={style.resize}
          />
          <h4 className="text-center m-0 p-1">Password Generator</h4>
        </div>
        {/* Card 5 */}
        <div className="contentbg rounded w-56 overflow-hidden shadow-lg cursor-pointer m-3">
          <img
            src="./assets/portfolio/planner.png"
            alt="day planner"
            style={style.resize}
          />
          <h4 className="text-center m-0 p-1">Day Planner</h4>
        </div>
        {/* Card 6 */}
        <div className="contentbg rounded w-56 overflow-hidden shadow-lg cursor-pointer m-3">
          <img
            src="./assets/portfolio/quiz.png"
            alt="project1"
            style={style.resize}
          />
          <h4 className="text-center m-0 p-1">J.S Quiz</h4>
        </div>
      </div>
    </div>
  );
}
//Application has a single Project component
//that’s used multiple times in the Portfolio section.
