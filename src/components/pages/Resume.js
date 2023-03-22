import React from "react";

export default function Resume() {
  return (
    <div className="bgColor d-flex justify-content-center">
      <div className="container d-flex flex-column align-items-center mt-5">
        <h3 className="text-center">Technology Proficiencies</h3>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <div className="p-2 m-4">
            <h4>Front-End</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Responsive-Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="p-2 m-4">
            <h4>Back-End</h4>
            <ul>
              <li>API's</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL/Sequelize</li>
              <li>MongoDB/Mongoose</li>
              <li>REST (Representational State Transfer)</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
        <a href="./Resume/Andrew_Landry_Resume.pdf" download>
          <button type="button" className="btn btn-secondary">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}
