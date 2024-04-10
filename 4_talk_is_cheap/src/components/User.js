const User = (props) => {
	return (
		<div className="user-card">
			<h2>{props.name}</h2>
			<h3>Location: Barasat</h3>
			<h4>Age: 21</h4>
		</div>
	);
};
export default User;
