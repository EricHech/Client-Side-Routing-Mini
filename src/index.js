import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function About() {
	return (
		<div>
			<h1>About Coponent</h1>
			<p id='paragraph'>This is the About Component</p>
		</div>
	);
}

function Home() {
	return (
		<div>
			<h1>Home Coponent</h1>
			<p id='paragraph'>This is the Home Component</p>
		</div>
	);
}

ReactDOM.render(
	<Router>
		<div>
			<Home />
			<About />
		</div>
	</Router>,
	document.getElementById('root')
);
