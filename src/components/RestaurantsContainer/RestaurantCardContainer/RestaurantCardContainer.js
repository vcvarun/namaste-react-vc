import { Link } from "react-router-dom";
import { RestaurantCard, withPromotedLabel } from "../RestaurantCard";
import "./RestaurantCardContainer.scss";

const RestaurantCardContainer = ({ restauarnts }) => {
	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

	return (
		<div className="res-card-container">
		{restauarnts?.map((card) => {
			console.log(card.info.veg);
			const {
			info: {
				name,
				cuisines,
				avgRating,
				deliveryTime,
				costForTwoString,
				cloudinaryImageId,
				id,
				veg
			} = {},
			} = card;

			const resProps = {
				name,
				cuisines,
				avgRating,
				deliveryTime,
				costForTwoString,
				imageId:cloudinaryImageId
			};

			return (
			<Link to={`restaurant/${id}`} key={id}>
				{veg ? 
					<RestaurantCardPromoted {...resProps} /> : 
					<RestaurantCard {...resProps} />
				}
			</Link>
			);
		})}
		</div>
	);
};

export default RestaurantCardContainer;
