import React from "react";

interface Props {}

export const About: React.FC<Props> = () => {
	return (
		<div className="mx-14 my-24 space-y-6 ">
			<h1 className="text-header font-extrabold text-4xl">Hello World 👋!</h1>
			<p>
				I am <span className="font-semibold">Nguyen Tuan Anh</span>, a
				self-taught developer, longing for exploring new technologies, gaining
				experience and improving my personal skills. A patient and responsible
				worker. I'm motivated to contribute and always ready for new adventures.
			</p>
			<p className="font-semibold">
				I am currently looking for a full-time job in Web development
			</p>
		</div>
	);
};
