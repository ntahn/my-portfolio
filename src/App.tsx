import "./App.css";
import { Portfolio } from "./components/Portfolio";
import { Switch, Route } from "react-router-dom";
import { About } from "./components/About";
import { Edu } from "./components/Edu";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function App() {
	return (
		<Switch>
			<Route exact path="/">
				<Portfolio>
					<About />
				</Portfolio>
			</Route>
			<Route exact path="/about">
				<Portfolio>
					<About />
				</Portfolio>
			</Route>
			<Route exact path="/edu">
				<Portfolio>
					<Edu />
				</Portfolio>
			</Route>
			<Route exact path="/skills">
				<Portfolio>
					<Skills />
				</Portfolio>
			</Route>
			<Route exact path="/experience">
				<Portfolio>
					<Experience />
				</Portfolio>
			</Route>
			<Route exact path="/projects">
				<Portfolio>
					<Projects />
				</Portfolio>
			</Route>
			<Route path="">
				<div>Page not found!</div>
			</Route>
		</Switch>
	);
}

export default App;
