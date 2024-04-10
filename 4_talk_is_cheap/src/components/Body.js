import RestaurantCard from './ResturantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//state variable  - super powerful variable
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7248307&lng=88.4891889&restaurantId=236673&submitAction=ENTER
const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [filterRestaurants, setFilterRestaurants] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);
	console.log(`Body Rendered`);
	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7248307&lng=88.4891889&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
		);
		const json = await data.json();
		console.log(json);
		setListOfRestaurants(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants ||
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants,
		);
		setFilterRestaurants(
			json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants ||
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants,
		);
	};
	console.log(listOfRestaurants);
	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						className="search-box"
						type="text"
						placeholder="Search for restaurants"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="search-btn"
						onClick={() => {
							//filter the resturant cards and update the ui
							//search text
							console.log(searchText);
							const filteredRestaurants = listOfRestaurants.filter((res) => {
								return res.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase());
							});
							setFilterRestaurants(filteredRestaurants);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						console.log(`Button Clicked`);
						const filteredData = listOfRestaurants.filter((resData) => {
							return resData.info.avgRating >= 4.0;
						});
						setFilterRestaurants(filteredData);
					}}
				>
					Top Rated Resturants
				</button>
			</div>
			<div className="res-container">
				{filterRestaurants.map((resData) => (
					<Link key={resData.info.id} to={'/restaurants/' + resData.info.id}>
						<RestaurantCard resData={resData} />
					</Link>
				))}
				{/* props */}
				{/* <RestaurantCard resName="Burger King" cuisine="Fast Food" /> */}
			</div>
		</div>
	);
};
export default Body;
