import User from './User';
import UserClass from './UserClass';
const About = () => {
	return (
		<div className="body">
			<h1>About Us</h1>
			<h2>This is our swiggy app</h2>
			<User name={'Name: Ayushmaan (Functional Component)'} />
			<UserClass name={'Name: Ayushmaan (Class Component)'} />
		</div>
	);
};
export default About;
