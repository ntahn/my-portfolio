import React from "react";

interface Props {}

export const Experience: React.FC<Props> = () => {
	return (
		<div className="mx-14 my-14 space-y-4 ">
			<h1 className="text-header font-extrabold text-4xl mb-8">Experience</h1>
			<div>
				<h2 className="font-bold text-lg">Personal Projects</h2>
				<p className="text-sm">(2020 - present)</p>
			</div>
			<p className="text-sm">
				&#8226; Learning and practicing by making some projects on my own with
				learned technologies
			</p>
			<div>
				<h2 className="font-bold text-lg">
					Cybersoft Programing Education Center
				</h2>
				<p className="text-sm">(2020/08 - 2021/04)</p>
			</div>
			<p className="text-sm">
				&#8226; Working on a web application for booking movie tickets with my
				team at Cybersoft center
			</p>
		</div>
	);
};
