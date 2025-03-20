import React from "react";

interface Props { }

export const About: React.FC<Props> = () => {
  return (
    <div className="mx-14 my-24 space-y-6 ">
      <h1 className="text-header font-extrabold text-4xl">Hello World 👋!</h1>
      <p>
        I'm <span className="font-semibold">Tuan Anh</span>! With a foundation of four years in ReactJS and React Native, I'm ready to contribute to innovative projects. I'm passionate about exploring cutting-edge technologies and bring a proactive, responsible approach to development. I'm eager to embark on a new challenge
      </p>
      <p className="font-semibold">
        I am currently looking for a full-time position in Web or Mobile development.
      </p>
    </div>
  );
};
