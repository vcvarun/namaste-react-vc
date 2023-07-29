import React, { useEffect, useState } from "react";
import RestaurantCardContainer from './RestaurantCardContainer/RestaurantCardContainer';
import RestaruantsHeader from './RestaurantsHeader/RestaurantsHeader';
import './RestaurantsContainer.scss';
import Shimmer from "./Shimmer/Shimmer";

export const RestaurantsContainer = () => {
    const [restauarnts, setRestaurants] = useState([]);
    const [masterRestauarnts, setMasterRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9967124&lng=77.5078297&page_type=DESKTOP_WEB_LISTING');
            const jsonData = await response.json();
    
            const cards = jsonData?.data?.cards?.filter(x => x.cardType === 'seeAllRestaurants')[0];
            setRestaurants(cards?.data?.data);
            setMasterRestaurants(cards?.data?.data);
            setLoading(false);
        } catch(e) {
            console.error(e);
            setLoading(false);
        }

    }

    const { totalRestaurants = 0 } = restauarnts;

    const filterRating = () => {
        const filteredcards = masterRestauarnts.cards.filter(res => res.data.avgRating > 4);
        const filteresRes = {
            ...restauarnts,
            cards: filteredcards
        };
        setRestaurants(filteresRes);
    }

    const handleSearchRestaurant = searchText => {
        const filteredRestaurants = masterRestauarnts.cards
        .filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
        setRestaurants({
            ...restauarnts,
            cards: filteredRestaurants
        });
    };

    if(loading) {
        return <Shimmer />;
    }

    return (
        <div className='res-container'>
            <RestaruantsHeader 
                filterRating={filterRating}
                totalRestaurants={totalRestaurants}
                handleSearchRestaurant={handleSearchRestaurant}
            />
            {
                restauarnts?.cards?.length === 0 ? (
                    <div className="no-records">
                        <h1>No Restaurants found</h1>
                    </div>
                ) : <RestaurantCardContainer restauarnts={restauarnts} />
            }
        </div>
    );
};
