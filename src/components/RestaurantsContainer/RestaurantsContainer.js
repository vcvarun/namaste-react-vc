import React, { useEffect, useState } from "react";
import RestaurantCardContainer from './RestaurantCardContainer/RestaurantCardContainer';
import RestaruantsHeader from './RestaurantsHeader/RestaurantsHeader';
import Shimmer from "./Shimmer/Shimmer";
import useOnlineStatus from "../../utils/hooks/useOnlineStatus";

export const RestaurantsContainer = () => {
    const [,setRestaurants] = useState([]);
    const [topRestaurants, setTopRestaurants] = useState([]);
    const [masterTopRestauarnts, setMasterTopRestaurants] = useState([]);

    const onlineStatus = useOnlineStatus();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9967124&lng=77.5078297&page_type=DESKTOP_WEB_LISTING');
            const jsonData = await response.json();
            const data = jsonData?.data;

            const topRestaurants = data?.cards?.find(card => card?.card?.card?.id === 'top_brands_for_you')
            ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setRestaurants(data);
            setTopRestaurants(topRestaurants);
            setMasterTopRestaurants(topRestaurants);

            setLoading(false);
        } catch(e) {
            console.error(e);
            setLoading(false);
        }

    }

    const filterRating = () => {
        const filteredcards = masterTopRestauarnts?.filter(res => res.info?.avgRating > 4);
        setTopRestaurants(filteredcards);
    }

    const handleSearchRestaurant = searchText => {
        const filteredRestaurants = masterTopRestauarnts?.filter(res => res.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        setTopRestaurants(filteredRestaurants);
    };

    if(!onlineStatus) {
        return <h1>Looks like you are offline! Please check your internet connection.</h1>
    }

    
    if(loading) {
        return <Shimmer />;
    }

    return (
        <div className="mt-4 px-36">
            <RestaruantsHeader 
                filterRating={filterRating}
                totalRestaurants={topRestaurants.length}
                handleSearchRestaurant={handleSearchRestaurant}
            />
            {
                topRestaurants?.length === 0 ? (
                    <div className="no-records">
                        <h1>No Restaurants found</h1>
                    </div>
                ) : <RestaurantCardContainer restauarnts={topRestaurants} />
            }
        </div>
    );
};
