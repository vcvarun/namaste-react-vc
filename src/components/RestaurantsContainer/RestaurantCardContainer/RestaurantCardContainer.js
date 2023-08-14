import { Link } from "react-router-dom";
import { RestaurantCard, withPromotedLabel } from "../RestaurantCard";

const RestaurantCardContainer = ({ restauarnts }) => {
	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

	return (
		<div className="mt-4 gap-12 flex flex-wrap">
		{restauarnts?.map((card) => {
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
