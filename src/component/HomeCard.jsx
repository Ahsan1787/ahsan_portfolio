import React from "react";
import myImg from '../assets/me2.png'
const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
      <div data-aos='fade-left' className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl my-10 gradiant-text">hey!</h1>
        <p className="text-gray-300 text-xl lg:text-2xl">
          My name is <span className="gradiant-text">Ahsan Ali</span>, and I am a MERN Stack Developer. I am 15 years old
          from Bangladesh. I have 1 month of work exprience, focusing and creating
          web applications, design systems that adds growth to your businesses
          and more. Over these years, I have developed various websites,
          conducted workshops and collaborated on diverse projects
        </p>
        <p className="text-gray-300 text-xl lg:text-2xl">
          I'm committed to furthering my skills an achieving new milestones in
          my career. Let's connect and create something amazing together!
        </p>
      </div>
      <div>
        <img data-aos='fade-right' src={myImg} alt="profile" className="rounded-full h-[200px] w-[200px] lg:w-[450px] lg:h-[450px] m-auto backdrop-blur-xl"/>
      </div>
    </div>
  );
};

export default HomeCard;