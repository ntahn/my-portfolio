import React from "react";

interface Props { }

export const Edu: React.FC<Props> = () => {
  return (
    <div className="mx-14 my-14 space-y-4 ">
      <h1 className="text-header font-extrabold text-4xl mb-8">Education</h1>
      <div>
        <h2 className="font-bold text-lg">
          Nguyen Du High School for the Gifted (Informatics honors class)
        </h2>
        <p className="">(2014-2017)</p>
      </div>
      <p className="">
        &#8226; Basic programming, Pascal
      </p>
      <div>
        <h2 className="font-bold text-lg">
          Ho Chi Minh University of Technology
        </h2>
        <p className="">(2017-2019)</p>
      </div>
      <p className="">
        &#8226; Studied in Computer Science: OOP, Data Structure and Algorithms
      </p>
      <div>
        <h2 className="font-bold text-lg">
          Cybersoft Programing Education Center
        </h2>
        <p className="">(2020/08 - 2021/04)</p>
      </div>
      <p className="">
        &#8226; Front-end Foundation course: basic knowledge of HTML5, CSS3,
        Bootstrap 4, SASS/SCSS,Javascript (ES5/ES6), AJAX, Git, TypeScript,
        Restful API ,Reactjs ...
      </p>
    </div>
  );
};
