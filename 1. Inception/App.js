/*
<div id="paremt">
			<div id="child1">
				<h1>I am h1 Tag</h1>
				<h2>I am h2 Tag</h2>
			</div>
            <div id="child2">
				<h1>I am h1 Tag</h1>
				<h2>I am h2 Tag</h2>
			</div>
		</div>
        ReactElement(Object)=>HTML(Browser Understands) 
*/
// For creating this nesting element
const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child1' }, [
		React.createElement('h1', {}, 'I am h1 Tag'),
		React.createElement('h2', {}, 'I am h2 Tag'),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', {}, 'I am h1 Tag'),
		React.createElement('h2', {}, 'I am h2 Tag'),
	]),
]);
const header = React.createElement(
	//header is a react element and react element is a normal JS Object
	'h1',
	{ id: 'heading', xyz: 'abc' }, //props
	'Hello World From React', //props
);
//console.log(header);
const root = ReactDOM.createRoot(document.querySelector('#root'));
//console.log(root);
//root.render(header);
root.render(parent);
