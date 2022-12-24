import React from "react";

const style = {
  resize: {
    height: "400px",
    width: "auto",
  },
  margin: {
    marginRight: "10vw",
    marginLeft: "10vw",
  },
};

export default function AboutMe() {
  return (
    <div className="bgColor d-flex justify-content-center align-items-center center">
      <div
        className="d-flex flex-row-reverse justify-content-center"
        style={style.margin}
      >
        <h5 className="text-start contentbg p-3 w-50 m-0 rounded-end shadow">
          Hello! My name is Andrew and I am an aspiring web developer located in
          Tucson, AZ. I started coding about 1 year ago through tutorial
          websites such as freecodecamp and TwilioQuest. I am also currently
          attending a college bootcamp to further my skills. My goal is to be
          sufficent enough at programming to build my own websites and software
          from scratch. I also aim to achieve an employable amount of knowledge
          in web development to secure a job doing something in which I am
          interested in and enjoy doing. I love learning and I am excited for
          the future! My hobbies and interests outside of computer programming
          are Skateboarding, fixing things like cars or smartphones, I also
          enjoy hiking and being active outside!
        </h5>
        <img
          src="./Assets/profilePic.jpeg"
          alt="profile pic"
          style={style.resize}
          className="shadow rounded-start"
        />
      </div>
    </div>
  );
}
