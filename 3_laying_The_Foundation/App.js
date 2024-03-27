import React from 'react';
import ReactDOM from 'react-dom/client';
// React.createElement => Object=>when it is rendered in DOM it will become HTML element
const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React🚀');

//JSX - IS NOT HTML IN JS( LOOKS LIKE HTML/XML LIKE SYNTAX)
// JSX transpiled before it reaches the js engine -- PARCEL(MANAGER) - BABEL( JS TRANSPILER JSX-->JS Engine READABLE CODE)

//jsx ==>React.createElement==>ReactElement-JS Object ==>HTMLELEMENT(render)
//console.log(heading);
//const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀🚀 </h1>;
const elem = <span>React element</span>;
const Title = () => (
	<h1 className="head" tabIndex="5">
		{elem}
		Namaste React using JSX 🚀🚀
	</h1>
);
//console.log(jsxHeading);

// React Component (TWO TYPES)
// class based components -- old way to writting code
// functional components -- new way to writting code
// This is called Component Composition
const number = 10000;
const HeadingComponent = () => {
	return (
		<div id="container">
			<h2>{number}</h2>
			<h2>{50 * 5}</h2>
			<h2>{console.log('hello')}</h2>
			<Title />
			<h1 className="heading">NAMASTE REACT FUNCTIONAL COMPONENT</h1>;
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
