import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../../utils';
import Shimmer from '../RestaurantsContainer/Shimmer/Shimmer';

export const RestaurantMenu = () => {
    const { resId } = useParams();
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        getMenuData();
    }, []);

    const getMenuData = async () => {
        const data = await fetch(`${MENU_API}${resId}`);
        const menuData = await data.json();
        setMenuItems(menuData);
    };

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
