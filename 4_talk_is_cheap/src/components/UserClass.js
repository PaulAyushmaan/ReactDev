import React from 'react';
class UserClass extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			count: 0,
			count2: 2,
		};
	}
	render() {
		const { name } = this.props;
		const { count } = this.state;
		return (
			<div className="user-card">
				<h1>Count : {count}</h1>
				<button
					className="filter-btn"
					onClick={() => {
						// never update state variables directly
						this.setState({ count: count + 1 });
					}}
				>
					Count Increase
				</button>
				<h2>{name}</h2>
				<h3>Location: Barasat</h3>
				<h4>Age: 21</h4>
			</div>
		);
	}
}
export default UserClass;
