import React from "react";
import avatar from "../images/avatar.jpg";
import { NavLink } from "react-router-dom";

interface Props {}

export const Portfolio: React.FC<Props> = ({ children }) => {
	return (
		<>
			<div className=" font-body min-h-screen flex align-middle justify-center bg-gradient-to-tr from-green-300 to-blue-300 text-blue-text ">
				<div className="grid grid-cols-10 my-12 glass-gradient z-10 backdrop-filter shadow-sm backdrop-blur-xl bg-white w-3/5 rounded-xl">
					<div className=" circle col-span-3 glass-gradient bg-white shadow-lg rounded-xl">
						<NavLink to="/about">
							<div className="text-center font-semibold">
								<img
									className="w-32 h-32 rounded-full object-cover mx-auto mt-6 shadow-md"
									src={avatar}
									alt="profile-pic"
								/>
								<h1 className="font-bold mt-2 -mb-1 text-lg text-header">
									Nguyen Tuan Anh
								</h1>
								<span className="text-sm">Front-end Developer</span>
							</div>
						</NavLink>

						<div className=" mt-4 space-y-8 mb-8">
							<p className=" ml-10 flex ">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="#1db69a"
									>
										<path d="M12 14l9-5-9-5-9 5 9 5z" />
										<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
										/>
									</svg>
								</span>
								<NavLink
									to="/edu"
									className=" transition ease-in duration-150 my-auto ml-4 font-medium text-lg"
									activeClassName="border-r-4 pr-4 border-green-500"
								>
									Education
								</NavLink>
							</p>

							<p className=" ml-10 flex">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="#1db69a"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/>
									</svg>
								</span>
								<NavLink
									to="/skills"
									activeClassName="border-r-4 pr-4 border-green-500"
									className="transition ease-in duration-150 my-auto ml-4 font-medium text-lg"
								>
									Skills
								</NavLink>
							</p>

							<p className=" ml-10 flex">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="#1db69a"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</span>
								<NavLink
									to="/experience"
									activeClassName="border-r-4 pr-4 border-green-500"
									className="transition ease-in duration-150 my-auto ml-4 font-medium text-lg"
								>
									Experience
								</NavLink>
							</p>
							<p className=" ml-10 flex">
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="#1db69a"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
										/>
									</svg>
								</span>
								<NavLink
									to="/projects"
									activeClassName="border-r-4 pr-4 border-green-500"
									className="transition ease-in duration-150 my-auto ml-4 font-medium text-lg"
								>
									Projects
								</NavLink>
							</p>
						</div>
					</div>
					<div className=" relative col-span-7 glass-gradient-lighter">
						{children}
						<div className="absolute flex right-4 bottom-4 space-x-4">
							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 mr-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<span> 0949453457</span>
							</div>
							<div className="flex">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 mr-1"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span> anh.nguyen996002@gmail.com</span>
							</div>
							<a
								href="https://github.com/ntahn"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-github fa-lg "></i>
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=100006747843218"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-facebook fa-lg "></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="glass-gradient absolute bg-white w-48 h-48 bottom-6 left-36 rounded-full"></div>
			<div className="glass-gradient bg-white absolute w-48 h-48 top-6 right-32 rounded-full"></div>
		</>
	);
};
