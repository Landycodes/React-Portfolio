import React from "react";

const style = {
  resize: {
    height: "66vh",
    width: "auto",
  },
};

export default function AboutMe() {
  return (
    <div className="bgColor">
      <div className="d-flex flex-row-reverse justify-content-center align-items-center p-3">
        <p
          className="text-start contentbg p-2 w-50 rounded-end lh-base m-0"
          style={style.resize}
        >
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
        </p>
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
