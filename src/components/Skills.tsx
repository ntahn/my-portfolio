import React from "react";

interface Props {}

export const Skills: React.FC<Props> = () => {
  return (
    <div className="mx-14 my-14 ">
      <h1 className="text-header font-extrabold text-4xl mb-8">Skills</h1>
      <ul className="space-y-4">
        <li className="flex text-md">
          <p className="font-bold mr-6 w-1/5">HTML/CSS</p>
          <span className=" my-auto">
            HTML5, CSS3, Bootstrap 4, TailwindCSS, SCSS, Responsive
          </span>
        </li>
        <li className="flex text-md">
          <p className="font-bold mr-6 w-1/5">Javascript</p>
          <span className=" my-auto">
            ES5/ES6, AJAX, RESTful API, Axios, TypeScript, ReactJS
          </span>
        </li>
        <li className="flex text-md">
          <p className="font-bold mr-6 w-1/5">Git</p>
          <span className=" my-auto">Git Basic</span>
        </li>
        <li className="flex text-md">
          <p className="font-bold mr-6 w-1/5">Base</p>
          <span className=" my-auto">OOP, Data Structure and Algorithms</span>
        </li>
        <li className="flex text-md">
          <p className="font-bold mr-6 w-1/5">Soft Skills</p>
          <span className=" my-auto">Teamwork, problems solving, critical thinking</span>
        </li>
        <li className="flex text-md">
          <p className="font-bold mr-6 w-1/5">English</p>
          <span className=" my-auto">Upper-Intermediate (Duolingo English Test)</span>
        </li>
      </ul>
    </div>
  );
};
