import React from "react";

const style = {
  resize: {
    height: "66vmin",
    width: "auto",
  },
};

export default function AboutMe() {
  return (
    <div className="bgColor">
      <div className="aboutme p-3">
        <p className="bio text-start contentbg p-2 rounded-end lh-base m-0">
          Hello! My name is Andrew and I am an aspiring web developer located in
          Tucson, AZ. I started coding back in 2018 through tutorial websites
          such as freecodecamp and TwilioQuest. I also graduated from a college
          bootcamp in 2023 from the University of Arizona to even further my
          skills. My goal is to be sufficient at computer programming and to
          build my own websites and software from scratch. I also aim to achieve
          an employable amount of knowledge in web development to secure a job
          doing something in which I am interested in and enjoy doing. I love
          learning and I am excited for the future! My hobbies and interests
          outside of computer programming are skateboarding, fixing things like
          cars or smartphones. I also enjoy hiking and being active outside!
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
