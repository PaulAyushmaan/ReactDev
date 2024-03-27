import { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
const Header = () => {
	const [btnName, setBtnName] = useState('Login');
	console.log(`HEADER RENDERED`);
	// if no dependency array => useEffect is called on every render
	// if dependency array is empty => useEffect is called only on initial render just once
	// dependency array is a array of variables which will be used inside useEffect
	useEffect(() => {
		console.log(`useeffect called`);
	}, [btnName]);
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} alt="" />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li> Contact Us</li>
					<li>Cart</li>
					<li>
						<button
							className="login-btn"
							onClick={() => {
								btnName === 'Login'
									? setBtnName('Logout')
									: setBtnName('Login');
							}}
						>
							{btnName}
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
