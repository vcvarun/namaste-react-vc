import React from 'react';
import Shimmer from '../RestaurantsContainer/Shimmer/Shimmer';
import useRestaurantMenu from '../../utils/hooks/useRestaurantMenu';

export const RestaurantMenu = () => {
    const menuItems = useRestaurantMenu();

    if(!menuItems) {
        return <Shimmer />
    }
    const { name, areaName, avgRating, sla, costForTwoMessage } = menuItems?.data?.cards[0]?.card?.card?.info;

    const { itemCards, title } = menuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 
    return (
        <>
            <h2>{name} - {avgRating}</h2>
            <div>{areaName}</div>
            <h3>{sla.slaString} -  {costForTwoMessage} </h3>
            <br />
            <h3>{title}</h3>
            {itemCards?.map(item => (
                <li key={item?.card?.info?.name}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100}</li>
            ))}
        </>
    );
};
