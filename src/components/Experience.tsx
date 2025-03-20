import React from "react";

interface Props {}

export const Experience: React.FC<Props> = () => {
  return (
    <div className="mx-14 my-14 space-y-4 ">
      <h1 className="text-header font-extrabold text-4xl mb-8">Experience</h1>
      <div>
        <h2 className="font-bold text-lg">KMS Technology</h2>
        <p className="">(06/2021 - PresentPresent) | Software Engineer</p>
      </div>
      <p className="">
        &#8226; Developed and maintained React applications for diverse clients.
      </p>
      <p className="">
        &#8226; Implemented new features, addressed bug fixes, and performed levels of testing
      </p>
      <p className="">
        &#8226; Provided guidance and support to a Fresher developer mentee
      </p>
      <div>
        <h2 className="font-bold text-lg">Kagency</h2>
        <p className="">(04/2021 - 06/2021) | ReactJS Developer</p>
      </div>
      <p className="">
        &#8226; Developed a content management system featuring a rich text editor for article creation and
        management
      </p>
    </div>
  );
};
