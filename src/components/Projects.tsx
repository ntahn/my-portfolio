import React from "react";
import goFanHQ from "./../images/GofanHQ.png";
import goFanBoxOffice from "./../images/GoFanBoxOffice.png";
import ethos from "./../images/Ethos.png";

interface Props { }

export const Projects: React.FC<Props> = () => {
  return (
    <div className="m-14 space-y-6 max-h-view overflow-scroll overflow-x-hidden ">
      <h1 className="text-header font-extrabold text-3xl">
        Some projects that I worked on 📂
      </h1>
      <div className="pr-2 space-y-2">
        <h2 className=" font-bold text-xl ">Coplogic™ Ethos</h2>
        <p className="">Coplogic Ethos allows all traffic officers, whether they're in cars, on
motorcycles, or on bicycles, to quickly and easily report accidents and issue tickets right from
their phones or tablets while they're out on patrol</p>
        <img className=" " src={ethos} alt="ethos" />
        <p>Technology: TypeScript, React Native, Redux</p>
        <a
          href="https://apps.apple.com/us/app/coplogic-ethos/id1536646637?l=vi"
          target="_blank"
          rel="noreferrer"
          className=" bg-indigo-400 text-center px-3 text-white py-2 my-2 mr-2 inline-block rounded "
        >
          See It Live
        </a>
        <a
          href="https://risk.lexisnexis.com/products/coplogic-ethos"
          target="_blank"
          rel="noreferrer"
          className=" bg-gray-500 text-center px-3 text-white py-2 my-2 mr-4 inline mr-2-inline-block rounded "
        >
          Project Details
        </a>
      </div>
      <div className="pr-2 space-y-2">
        <h2 className=" font-bold text-xl ">GoFanHQ</h2>
        <p className="">GofanHQ provides schools with a user-friendly dashboard to manage their own events and
          seasons, eliminating the need for administrative support.</p>
        <img className=" " src={goFanHQ} alt="gofanHQ" />
        <p>Technology: TypeScript, ReactJS, Redux Saga, Carbon, SCSS, React Hook Form</p>
        <a
          href="https://hq.gofan.co/login"
          target="_blank"
          rel="noreferrer"
          className=" bg-indigo-400 text-center px-3 text-white py-2 my-2 mr-2 inline-block rounded "
        >
          See It Live
        </a>
        <a
          href="https://playonsports.com/hq"
          target="_blank"
          rel="noreferrer"
          className=" bg-gray-500 text-center px-3 text-white py-2 my-2 mr-4 inline mr-2-inline-block rounded "
        >
          Project Details
        </a>
      </div>
      <div className="pr-2 space-y-2">
        <h2 className=" font-bold text-xl ">GoFan Box Office</h2>
        <p className="">
          Box Office enable event organizers to sell tickets and concessions directly at
          their events
        </p>
        <img className="" src={goFanBoxOffice} alt="GoFan Box Office" />
        <p>Technology: TypeScript, React Native, Redux, React-Query, Stripe Terminal, Seats.io</p>
        <a
          href="https://apps.apple.com/us/app/gofan-box-office/id1673489155"
          target="_blank"
          rel="noreferrer"
          className=" bg-indigo-400 text-center px-3 text-white py-2 my-2 mr-2 inline-block rounded "
        >
          See It Live
        </a>
        <a
          href="https://gofan.playonsports.com/box-office"
          target="_blank"
          rel="noreferrer"
          className=" bg-gray-500 text-center px-3 text-white py-2 my-2 mr-4 inline mr-2-inline-block rounded "
        >
          Project Details
        </a>
      </div>
    </div>
  );
};
