import { CDN_URL } from '../utils/constants';
const styleCard = {
	backgroundColor: '#f0f0f0',
};
const RestaurantCard = (props) => {
	const { resData } = props;
	const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
		resData?.info;
	const { slaString } = resData?.info?.sla;
	return (
		<div className="res-card" style={styleCard}>
			<div className="card-img">
				<img
					className="res-logo"
					src={CDN_URL + cloudinaryImageId}
					alt=""
					width="10px"
				/>
			</div>
			<div className="card-info">
				<h3>{name}</h3>
				<h4>{cuisines.join(', ')}</h4>
				<h4>{avgRating} Stars</h4>
				<h5>{costForTwo}</h5>
				<h4>{slaString}</h4>
			</div>
		</div>
	);
};
export default RestaurantCard;
