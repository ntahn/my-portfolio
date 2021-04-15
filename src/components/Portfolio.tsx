import React from "react";

interface Props {}

export const Portfolio: React.FC<Props> = () => {
	return (
		<div className=" relative">
			<div className="container relative mx-auto z-20">content</div>
			<div className="absolute bg-blue-200 w-60 h-60 top-0 left-0 z-0"></div>
			<div className=" "></div>
		</div>
	);
};
