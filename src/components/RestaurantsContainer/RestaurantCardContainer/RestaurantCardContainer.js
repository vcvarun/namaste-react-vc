import { Link } from "react-router-dom";
import { RestaurantCard } from "../RestaurantCard";
import "./RestaurantCardContainer.scss";


const RestaurantCardContainer = ({ restauarnts }) => {
  return (
    <div className="res-card-container">
      {restauarnts?.map((card) => {
        const {
          info: {
            name,
            cuisines,
            avgRating,
            deliveryTime,
            costForTwoString,
            cloudinaryImageId,
            id
          } = {},
        } = card;

        return (
          <Link to={`restaurant/${id}`} key={id}>
            <RestaurantCard
              name={name}
              cuisines={cuisines}
              avgRating={avgRating}
              deliveryTime={deliveryTime}
              costForTwoString={costForTwoString}
              imageId={cloudinaryImageId}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default RestaurantCardContainer;
