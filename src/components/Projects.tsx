import React from "react";
import tiix from "./../images/tiix.png";
import tiixx from "./../images/tiix2.png";
import quizt from "./../images/quizt.png";
import quiztt from "./../images/quiztt.png";
import todo from "./../images/todo.png";
import omni from "./../images/omnifood.png";

interface Props {}

export const Projects: React.FC<Props> = () => {
	return (
		<div className="m-14 space-y-6 max-h-view overflow-scroll overflow-x-hidden ">
			<h1 className="text-header font-extrabold text-3xl">
				Some of my projects 📂
			</h1>
			<div className="pr-2 space-y-2">
				<h2 className=" font-bold text-xl ">Tiix</h2>
				<p className="">
					I worked on login and dashboard routes of a movie booking web app
				</p>
				<img className=" " src={tiix} alt="tiix" />
				<img className="" src={tiixx} alt="tiixx" />
				<p>Technology: React hooks, Bootstrap 4, SCSS, ES6, APIs, Axios</p>
				<a
					href="https://tiix.netlify.app/"
					target="_blank"
					rel="noreferrer"
					className=" bg-indigo-400 text-center px-3 text-white py-2 my-2 mr-2 inline-block rounded w-28"
				>
					Demo Link
				</a>
				<a
					href="https://github.com/ntahn/tiix"
					target="_blank"
					rel="noreferrer"
					className=" bg-gray-500 text-center px-3 text-white py-2 my-2 mr-4 inline mr-2-inline-block rounded w-28"
				>
					Github Link
				</a>
			</div>
			<div className="pr-2 space-y-2">
				<h2 className=" font-bold text-xl ">Quizt</h2>
				<p className="">A quiz app to test your knowledge</p>
				<img className=" " src={quizt} alt="quizt" />
				<img className="" src={quiztt} alt="quiztt" />
				<p>Technology: React hooks, TailwindCSS, TypeScript, APIs, Axios</p>
				<a
					href="https://quizt.netlify.app/"
					target="_blank"
					rel="noreferrer"
					className=" bg-indigo-400 text-center px-3 text-white py-2 my-2 mr-2 inline-block rounded w-28"
				>
					Demo Link
				</a>
				<a
					href="https://github.com/ntahn/quizt"
					target="_blank"
					rel="noreferrer"
					className=" bg-gray-500 text-center px-3 text-white py-2 my-2 mr-4 inline mr-2-inline-block rounded w-28"
				>
					Github Link
				</a>
			</div>
			<div className="pr-2 space-y-2">
				<h2 className=" font-bold text-xl ">To Do</h2>
				<p className="">a task managing app that i made</p>
				<img className=" " src={todo} alt="todo" />
				<p>Technology: Typescript, React Hooks, TailwindCss, React Spring</p>
				<a
					href="https://ntahn-todo.netlify.app/"
					target="_blank"
					rel="noreferrer"
					className=" bg-indigo-400 text-center px-3 text-white py-2 my-2 mr-2 inline-block rounded w-28"
				>
					Demo Link
				</a>
				<a
					href="https://github.com/ntahn/todo"
					target="_blank"
					rel="noreferrer"
					className=" bg-gray-500 text-center px-3 text-white py-2 my-2 mr-2 inline-block rounded w-28"
				>
					Github Link
				</a>
			</div>
			<div className="pr-2 space-y-2">
				<h2 className=" font-bold text-xl ">Omnifood</h2>
				<p className="">a UI clone of food delivery app</p>
				<img className=" " src={omni} alt="omnifood" />
				<p>Technology: HTML,CSS</p>
			</div>
		</div>
	);
};
