import React from "react";

interface Props { }

export const Accomplishments: React.FC<Props> = () => {
  return (
    <div className="mx-14 my-14 space-y-4 ">
      <h1 className="text-header font-extrabold text-4xl mb-8">Accomplishments</h1>
      <p className="">
        &#8226; Second Informatics prizes on City and Provincial levels
      </p>
      <p className="">
        &#8226; Top 30 Tiki Hacking Trail 2022
      </p>
    </div>
  );
};
