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
          {/* Hello! My name is Andrew and I am a full-stack web developer located
          in Tucson, AZ. I started coding back in 2018 and am a mostly self
          tought programmer with assistents learning core concepts through
          tutorial websites such as freecodecamp and TwilioQuest. I also
          graduated from a college bootcamp in 2023 from the University of
          Arizona to even further my skills. My goal is to secure a job doing
          something in which I am passionate in and enjoy doing. I love learning
          and I am excited for the future! My hobbies and interests outside of
          computer programming are skateboarding, fixing things like cars or
          smartphones. I also enjoy hiking and being active outside! */}
          Hello! I'm Andrew, a seasoned full-stack web developer currently
          residing in Tucson, AZ. Since igniting my coding journey in 2018, I've
          been captivated by the world of programming. With a foundation rooted
          in self-guided learning from platforms like freecodecamp and
          TwilioQuest, I've embraced core concepts and demonstrated my
          adaptability.
          <br></br>
          My commitment to growth led me to complete a rigorous college bootcamp
          at the University of Arizona in 2023. This academic pursuit not only
          deepened my skills but also solidified my passion for coding. Beyond
          programming, I'm an avid skateboarder and hands-on problem solver.
          Whether it's fixing cars or hiking, I channel the same vigor into
          everything I do.
          <br></br>
          I'm thrilled about the possibilities that lie ahead and eager to
          contribute my expertise to a dynamic team. My journey as a programmer
          has only just begun, and I'm excited to explore new avenues of
          innovation and collaboration. Thank you for considering me as a
          potential asset to your team. Let's shape the future together!
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
