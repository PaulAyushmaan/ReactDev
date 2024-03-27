import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/Header';
import Body from '../components/Body';

// const resObj = {
// 	info: {
// 		id: '39309',
// 		name: 'KFC',
// 		cloudinaryImageId: 'f01666ac73626461d7455d9c24005cd4',
// 		locality: 'Kasba',
// 		areaName: 'Kasba RB Connector',
// 		costForTwo: '₹450 for two',
// 		cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
// 		avgRating: 4.4,
// 		parentId: '547',
// 		avgRatingString: '4.4',
// 		totalRatingsString: '10K+',
// 		sla: {
// 			deliveryTime: 27,
// 			lastMileTravel: 1.2,
// 			serviceability: 'SERVICEABLE',
// 			slaString: '25-30 mins',
// 			lastMileTravelString: '1.2 km',
// 			iconType: 'ICON_TYPE_EMPTY',
// 		},
// 		availability: {
// 			nextCloseTime: '2024-03-17 02:59:00',
// 			opened: true,
// 		},
// 		badges: {},
// 		isOpen: true,
// 		type: 'F',
// 		badgesV2: {
// 			entityBadges: {
// 				imageBased: {},
// 				textBased: {},
// 				textExtendedBadges: {},
// 			},
// 		},
// 		aggregatedDiscountInfoV3: {
// 			header: '₹35 OFF',
// 			subHeader: 'ABOVE ₹179',
// 			discountTag: 'MIN',
// 		},
// 		differentiatedUi: {
// 			displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
// 			differentiatedUiMediaDetails: {
// 				mediaType: 'ADS_MEDIA_ENUM_IMAGE',
// 				lottie: {},
// 				video: {},
// 			},
// 		},
// 		reviewsSummary: {},
// 		displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
// 		restaurantOfferPresentationInfo: {},
// 	},
// 	analytics: {},
// 	cta: {
// 		link: 'https://www.swiggy.com/restaurants/kfc-kasba-kasba-rb-connector-kolkata-39309',
// 		type: 'WEBLINK',
// 	},
// };

const AppLayout = () => {
	return (
		<div className="app">
			{/* Header */}
			<Header />
			<Body />
			{/* //Body //Footer */}
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
