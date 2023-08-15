import React from 'react';
import Shimmer from '../RestaurantsContainer/Shimmer/Shimmer';
import useRestaurantMenu from '../../utils/hooks/useRestaurantMenu';
import { RestaurantDetail } from '../RestaurantDetail';
import { Divider } from '../../common';

export const RestaurantMenu = () => {
    const menuItems = useRestaurantMenu();

    if(!menuItems) {
        return <Shimmer />
    }
    const { name, areaName, avgRating, sla, costForTwoMessage } = menuItems?.data?.cards[0]?.card?.card?.info;

    const cardData = menuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
 
    return (
        <div className="px-[22rem] py-8">
            <div className="px-4">
                <div className="font-bold text-xl">{name} - {avgRating}</div>
                <div>{areaName}</div>
                <div className="mt-2 mb-6">{sla.slaString} -  {costForTwoMessage} </div>
                <Divider />
            </div>
            <RestaurantDetail data={cardData?.cards} />
        </div>
    );
};
