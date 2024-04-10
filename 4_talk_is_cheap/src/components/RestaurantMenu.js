import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { CDN_URL, MENU_API_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';
const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null);
	const { resId } = useParams();
	useEffect(() => {
		fetchMenu();
	}, []);
	const fetchMenu = async () => {
		const data = await fetch(MENU_API_URL + resId);
		const json = await data.json();
		console.log(json);
		setResInfo(json.data);
		console.log(json.data.cards[2].card.card.info);
		console.log(MENU_API_URL + resId);
	};
	if (resInfo === null) {
		return <Shimmer />;
	}

	const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
		resInfo.cards?.[2]?.card?.card?.info;
	const { itemCards } =
		resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card ||
		resInfo.cards[3].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
	console.log(itemCards);
	return (
		<div className="menu body">
			<h1>{name}</h1>
			<h3>{avgRating} Stars</h3>
			<p>
				{cuisines.join(', ')} - {costForTwoMessage}
			</p>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((item) => (
					<li>
						{item.card.info.name} -
						{item.card.info.price / 100 || item.card.info.defaultPrice / 100} Rs
						<img
							className="menuImg"
							src={CDN_URL + item.card.info.imageId}
							alt=""
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
